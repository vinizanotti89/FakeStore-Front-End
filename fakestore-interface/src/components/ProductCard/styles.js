import styled from "styled-components";

export const Card = styled.div`
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

export const OfferBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(135deg, #ff6b6b, #e74c3c);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

export const ProductImage = styled.img`
  width: 65%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
  margin: 0 auto;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductCategory = styled.span`
  color: #666;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

export const ProductName = styled.h3`
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductPrice = styled.span`
  color: #290002;
  font-size: 1.3rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;