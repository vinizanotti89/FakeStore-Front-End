import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

import BackgroundLogin from "../../assets/BackgroundLogin.png";
import Background from "../../assets/Background.png";


export const LoginContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    height: 100vh;
    width: 100%;
    max-width: 50%;
    background-position: center ;
    background-size: cover;
    display: flex;
`;

export const RightContainer = styled.div`
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



export const H2 = styled.h2`
    text-align: center;
    font-size: 3rem;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
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

`;


export const ForgotPasswordLink = styled(RouterLink)`
  color: #007BFF;
  text-decoration: none;
  text-align: center;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpLink = styled(RouterLink)`
  color: #FF6347;
  text-decoration: none;
  text-align: center; 
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;