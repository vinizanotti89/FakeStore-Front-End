import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

export const Total = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const CardField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3d0003;
    box-shadow: 0 0 0 2px rgba(61,0,3,0.2);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #290002, #3d0003);
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(41, 0, 2, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(41, 0, 2, 0.4);
    background: linear-gradient(135deg, #3d0003, #290002);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

