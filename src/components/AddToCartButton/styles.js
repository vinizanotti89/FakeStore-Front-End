// components/AddToCartButton/styles.js
import styled from 'styled-components';

export const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const AddToCartBtn = styled.button`
  background: ${props => props.$isLoading ? '#667' : '#9758A6'};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${props => props.$isLoading ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #7a4a86;
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #f8f9fa;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #e9ecef;
`;

export const QuantityButton = styled.button`
  background: #9758A6;
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #7a4a86;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  min-width: 100px;
  text-align: center;
`;

export const RemoveButton = styled.button`
  background: transparent;
  color: #dc3545;
  border: 2px solid #dc3545;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #dc3545;
    color: white;
  }
`;