import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

import {
  HeaderContainer,
  HeaderContent,
  Logo,
  HeaderActions,
  HeaderButton,
  CartButton,
  CartBadge,
  UserGreeting,
  LogoutButton,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();

  const handleCartClick = () => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    navigate('/cart');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/cadastro');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={handleLogoClick}>
          FAKE STORE
        </Logo>

        <HeaderActions>
          {isAuthenticated() ? (
            <>
              <UserGreeting>
                Olá, {user?.name || user?.email || 'Usuário'}!
              </UserGreeting>
              <Link to="/purchases">Minhas Compras</Link>
              <LogoutButton onClick={handleLogout}>
                Sair
              </LogoutButton>
            </>
          ) : (
            <>
              <HeaderButton onClick={handleLoginClick}>
                Faça seu Login
              </HeaderButton>
              <HeaderButton onClick={handleRegisterClick} variant="outline">
                Crie sua Conta
              </HeaderButton>
            </>
          )}

          <CartButton onClick={handleCartClick}>
            🛒
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
          </CartButton>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  );
}