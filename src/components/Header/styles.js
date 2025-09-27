import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(41, 0, 2, 0.95) 93%);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 0.8rem 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export const Logo = styled.div`
  font-family: 'Road Rage', sans-serif;
  font-size: 1.8rem;
  color: #00ffff;
  cursor: pointer;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const HeaderButton = styled.button`
  background: ${props => props.variant === 'outline'
        ? 'transparent'
        : 'linear-gradient(135deg, #290002, #3d0003)'
    };
  color: white;
  border: ${props => props.variant === 'outline'
        ? '2px solid #00ffff'
        : 'none'
    };
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
    ${props => props.variant === 'outline'
        ? 'background: rgba(0, 255, 255, 0.1);'
        : 'background: linear-gradient(135deg, #3d0003, #5a0004);'
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

export const CartButton = styled.button`
  position: relative;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
    background: linear-gradient(135deg, #218838, #1e7e34);
  }
  
  &:active {
    transform: translateY(0) scale(1);
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  min-width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(255, 68, 68, 0.4);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @media (max-width: 480px) {
    min-width: 20px;
    height: 20px;
    font-size: 0.7rem;
    top: -6px;
    right: -6px;
  }
`;

export const UserGreeting = styled.span`
  color: #00ffff;
  font-size: 0.9rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  @media (max-width: 480px) {
    display: none; /* Oculta a saudação em telas muito pequenas */
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: #ff6b6b;
  border: 2px solid #ff6b6b;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff6b6b;
    color: white;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;