import styled, { keyframes } from 'styled-components';

import BackgroundLogin from "../../assets/BackgroundLogin.png";
import Background from "../../assets/Background.png";

// Animação de "fade-in"
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Animação de "fade-out"
const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

export const ResetContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const LeftReset = styled.div`
    background: url('${BackgroundLogin}');
    height: 100vh;
    width: 100%;
    max-width: 50%;
    background-position: center ;
    background-size: cover;
    display: flex;
`;

export const RightReset = styled.div`
    background: 
    linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)),
    url('${Background}');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    font-size: 1.5rem;
    color: #20262a;
    font-family: 'Roboto', sans-serif;
    
    span {
        font-weight: normal; 
        font-size: 20px; 
        color: #20262a;
        font-weight: bold;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: -50px;
`;

export const P = styled.p`
    color: #f23c34;
    font-size: ${props => props.size || '2.2rem'};
    font-family: 'Road Rage', sans-serif;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    position: relative;

    input{
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 52px;
        padding: 0 16px;
        background-color: #f1debb;
    }
    label {
        font-size: 18px;
        color: #20262a;
        font-weight: bold;
    }

   div {
        background-color: #f8d7da;
        color: #721c24;
        padding: 10px;
        border: 1px solid #f5c6cb;
        border-radius: 5px;
        font-size: 14px;
        margin-top: 5px;
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        animation: ${fadeIn} 0.3s ease-in-out, ${fadeOut} 0.3s ease-in-out 1.2s forwards;
    }
`;

export const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    font-size: 1.1rem;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        background-color: #b5b5b5;
    }

    &:hover {
        background-color: #45a049;
    }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const PopupContent = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 1000px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  position: relative;

  p {
    margin-bottom: 20px;
  }

  button {
    background-color: #FF6347;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background-color: #e55347;
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 20px;
  }
`;