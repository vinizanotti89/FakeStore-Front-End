import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [pendingAction, setPendingAction] = useState(null);

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  // Carrega usuário + token do localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('@ecommerce:user');
    const storedToken = localStorage.getItem('token');
    const expiration = localStorage.getItem('token_expiration');

    if (
      storedUser &&
      storedToken &&
      expiration &&
      Date.now() < Number(expiration)
    ) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    } else {
      localStorage.removeItem('@ecommerce:user');
      localStorage.removeItem('token');
      localStorage.removeItem('token_expiration');
    }

    setLoading(false);
  }, []);

  // Login
  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error || 'Falha no login' };
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem(
        'token_expiration',
        Date.now() + 7 * 24 * 60 * 60 * 1000,
      ); // opcional
      localStorage.setItem(
        '@ecommerce:user',
        JSON.stringify({
          id: data.id,
          name: data.name,
          email: data.email,
          role: data.admin ? 'admin' : 'user',
        }),
      );

      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.admin ? 'admin' : 'user',
      });
      setToken(data.token); // ✅ salva no state

      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }

      return { success: true };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, error: 'Erro interno do servidor' };
    } finally {
      setLoading(false);
    }
  };

  // Registro
  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error || 'Falha no registro' };
      }

      localStorage.setItem(
        '@ecommerce:user',
        JSON.stringify({
          id: data.id,
          name: data.name,
          email: data.email,
          role: data.admin ? 'admin' : 'user',
        }),
      );
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.admin ? 'admin' : 'user',
      });

      return { success: true };
    } catch (err) {
      console.error('Register error:', err);
      return { success: false, error: 'Erro interno do servidor' };
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('@ecommerce:user');
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
  };

  const isAuthenticated = () => !!user && !!token;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        isAuthenticated,
        setPendingAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  return context;
}
