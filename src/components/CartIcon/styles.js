import styled from 'styled-components';

export const CartIconContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

export const CartIconButton = styled.button`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.hasItems ? '#290002' : '#667'};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    background: ${props => props.hasItems ? '#3d0003' : '#777'};
    
    > div:last-child {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(-10px);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const CartIcon = styled.span`
  font-size: 24px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CartBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid white;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 68, 68, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(255, 68, 68, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(255, 68, 68, 0);
    }
  }
`;

export const CartTooltip = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px 10px;
  }
`;