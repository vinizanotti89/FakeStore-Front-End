import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #290002;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(41, 0, 2, 0.2);

  &:hover {
    background: #3d0003;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(41, 0, 2, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BackIcon = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #290002;
  font-weight: bold;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  
  h2 {
    color: #290002;
    font-size: 2rem;
    margin: 1rem 0;
  }
  
  p {
    color: #667;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

export const EmptyCartIcon = styled.div`
  font-size: 4rem;
  opacity: 0.5;
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  gap: 1rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  
  @media (max-width: 768px) {
    grid-template-columns: 60px 1fr;
    grid-template-rows: auto auto auto;
    gap: 0.5rem;
  }
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ItemInfo = styled.div`
  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

export const ItemName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
`;

export const ItemPrice = styled.p`
  font-size: 0.9rem;
  color: #667;
  margin: 0;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    grid-column: span 2;
    justify-self: start;
  }
`;

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #f5f5f5;
    border-color: #290002;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityDisplay = styled.span`
  min-width: 40px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
`;

export const ItemSubtotal = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #290002;
  
  @media (max-width: 768px) {
    grid-column: span 2;
    text-align: right;
    font-size: 1.2rem;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  opacity: 0.6;
  
  &:hover {
    opacity: 1;
    background: rgba(255, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const CartSummary = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 15px;
  height: fit-content;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const SummaryTitle = styled.h3`
  font-size: 1.3rem;
  color: #290002;
  margin: 0 0 1.5rem 0;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #290002;
  padding-bottom: 0.5rem;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`;

export const SummaryLabel = styled.span`
  color: #333;
  font-size: 1rem;
`;

export const SummaryValue = styled.span`
  color: #290002;
  font-weight: 600;
  font-size: 1rem;
`;

export const TotalRow = styled(SummaryRow)`
  border-top: 2px solid #eee;
  padding-top: 1rem;
  margin-top: 1.5rem;
  
  ${SummaryLabel} {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  ${SummaryValue} {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #290002, #3d0003);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(41, 0, 2, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(41, 0, 2, 0.4);
    background: linear-gradient(135deg, #3d0003, #290002);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Modal Styles
export const ConfirmModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  max-width: 400px;
  width: 90%;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
  
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

export const ModalTitle = styled.h3`
  color: #290002;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
`;

export const ModalMessage = styled.p`
  color: #667;
  margin: 0 0 2rem 0;
  text-align: center;
  line-height: 1.5;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export const ModalButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
  
  ${props => props.variant === 'cancel' && `
    background: #f5f5f5;
    color: #667;
    
    &:hover {
      background: #ebebeb;
      color: #333;
    }
  `}
  
  ${props => props.variant === 'confirm' && `
    background: #ff4444;
    color: white;
    
    &:hover {
      background: #ff3333;
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(255, 68, 68, 0.3);
    }
  `}
  
  &:active {
    transform: translateY(0);
  }
`;