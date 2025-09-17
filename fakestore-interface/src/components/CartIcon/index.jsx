import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import {
  CartIconContainer,
  CartIconButton,
  CartIcon,
  CartBadge,
  CartTooltip,
} from './styles';

export function CartIconComponent() {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { isAuthenticated } = useAuth();

  const handleCartClick = () => {
    if (!isAuthenticated()) {
      // Se não estiver logado, redireciona para login
      navigate('/login?redirect=/cart');
      return;
    }

    // Se estiver logado, vai para o carrinho
    navigate('/cart');
  };

  return (
    <CartIconContainer>
      <CartIconButton onClick={handleCartClick} hasItems={totalItems > 0}>
        <CartIcon>🛒</CartIcon>
        {totalItems > 0 && (
          <CartBadge>{totalItems > 99 ? '99+' : totalItems}</CartBadge>
        )}
        <CartTooltip>
          {!isAuthenticated()
            ? 'Faça login para acessar o carrinho'
            : totalItems === 0
              ? 'Carrinho vazio'
              : `${totalItems} ${totalItems === 1 ? 'item' : 'itens'} no carrinho`}
        </CartTooltip>
      </CartIconButton>
    </CartIconContainer>
  );
}
