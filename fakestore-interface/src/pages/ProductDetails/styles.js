// pages/ProductDetails/styles.js
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
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
  margin-bottom: 2rem;
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

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
  width: 85%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
  margin: 0 auto; /* Centraliza horizontalmente */
  
  &:hover {
  transform: scale(1.05);
}
`;



export const OfferBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #ff6b6b, #e74c3c);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

export const InfoSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductCategory = styled.span`
  color: #667;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const ProductTitle = styled.h1`
  color: #333;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  font-family: 'Road Rage', sans-serif;
`;

export const ProductPrice = styled.div`
  color: #290002;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  font-family: 'Road Rage', sans-serif;
`;

export const ProductDescription = styled.p`
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  padding: 1.5rem 0;
  border-top: 2px solid #f0f0f0;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 0;
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.3rem;
  color: #667;
  font-family: 'Road Rage', sans-serif;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
  border-radius: 15px;
  border: 2px solid rgba(231, 76, 60, 0.2);
  margin-top: 2rem;
`;