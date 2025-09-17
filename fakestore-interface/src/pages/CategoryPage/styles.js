import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
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

export const CategoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  /* Adicionando fundo semi-transparente para melhor legibilidade */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

export const CategoryTitle = styled.h1`
  font-size: 3rem;
  color: #290002;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 1.2rem;
  color: #667;
  font-weight: 400;
  margin: 0;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.5rem;
  color: #290002;
  font-weight: 500;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

export const ErrorMessage = styled.div`
  background-color: rgba(248, 215, 218, 0.95);
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem auto;
  text-align: center;
  font-size: 1.1rem;
  max-width: 600px;
  backdrop-filter: blur(5px);
`;

export const EmptyMessage = styled.div`
  text-align: center;
  font-size: 1.3rem;
  color: #667;
  margin: 4rem auto;
  padding: 2rem;
  background: rgba(248, 249, 250, 0.95);
  border-radius: 10px;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

export const Banner = styled.div`
  background: url(${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

//NOVOS ESTILOS PARA OS PRODUTOS
export const ProductCardContainer = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: #290002;
  }
`;

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 65%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  display: block;
  margin: 0 auto; /* Centraliza horizontalmente */
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #9758a6;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  color: #290002;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const AddToCartButton = styled.button`
  width: 100%;
  background-color: #9758a6;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a4a8a;
  }
`;