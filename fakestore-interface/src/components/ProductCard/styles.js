import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

export const ProductCard = styled.div`
  position: relative;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: #290002;
  }
`;

export const ProductImage = styled.img`
  width: 65%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
  margin: 0 auto; /* Centraliza horizontalmente */
  
  &:hover {
  transform: scale(1.05);
}
`;

export const OfferBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(135deg, #ff4444, #ff6666);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(255, 68, 68, 0.4);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

export const CartFeedback = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(41, 0, 2, 0.95);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(41, 0, 2, 0.4);
  z-index: 3;
  animation: feedbackSlide 2s ease-out;
  
  @keyframes feedbackSlide {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    20%, 80% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  line-height: 1.3;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #667;
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

export const PriceContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const ProductPrice = styled.div`
  font-size: 1.4rem;
  color: #290002;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const OriginalPrice = styled.div`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
  margin-bottom: 0.3rem;
`;

export const Discount = styled.div`
  font-size: 0.85rem;
  color: #22a922;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;

export const ViewButton = styled.button`
  background: transparent;
  color: #290002;
  border: 2px solid #290002;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #290002;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(41, 0, 2, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const CartSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

export const AddToCartButton = styled.button`
  background: linear-gradient(135deg, #290002, #3d0003);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(41, 0, 2, 0.2);
  
  span {
    font-size: 1.1rem;
  }
  
  &:hover {
    background: linear-gradient(135deg, #3d0003, #290002);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(41, 0, 2, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.8rem;
  background: rgba(41, 0, 2, 0.1);
  border-radius: 25px;
  border: 2px solid #290002;
`;

export const QuantityButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background: #290002;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3d0003;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #290002;
  min-width: 30px;
  text-align: center;
`;

export const ProductCategory = styled.span`
  color: #667;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;