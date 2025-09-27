import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [pendingAction, setPendingAction] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  // Carregar user/token e validar expiração
  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('token_expiration');
    const savedUser = localStorage.getItem('@ecommerce:user');

    if (token && savedUser && expiration && Date.now() < Number(expiration)) {
      setUser(JSON.parse(savedUser));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('token_expiration');
      localStorage.removeItem('@ecommerce:user');
    }

    setLoading(false);
  }, []);

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

      // salva token + expiração de 7 dias
      localStorage.setItem('token', data.token);
      localStorage.setItem(
        'token_expiration',
        Date.now() + 7 * 24 * 60 * 60 * 1000,
      );
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

      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erro interno do servidor' };
    } finally {
      setLoading(false);
    }
  };

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

      if (pendingAction) {
        pendingAction();
        setPendingAction(null);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erro interno do servidor' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('@ecommerce:user');
    localStorage.removeItem('@ecommerce:cart');
    localStorage.removeItem('token');
    localStorage.removeItem('token_expiration');
  };

  const isAuthenticated = () => !!user && !!localStorage.getItem('token');

  return (
    <AuthContext.Provider
      value={{
        user,
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
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
