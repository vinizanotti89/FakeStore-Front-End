import styled from "styled-components";

import BannerHome from '../../assets/Banner.png';
import Background from '../../assets/Background.png';

export const BannerSection = styled.section`
  width: 100%;
`;

export const BannerTitle = styled.h1`
  font-family: 'Road Rage', sans-serif;
  font-size: clamp(1.5rem, 8vw, 3rem);
  color: #E6E6E6;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin: 0;
  padding: 0.2rem 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, #290002ff 93%);
  
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 6vw, 2rem);
    padding: 1.5rem 1rem 0.8rem 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 5vw, 1.5rem);
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  }
`;

export const Banner = styled.div`
  position: relative;
  background: 
    url(${BannerHome}),
    linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, #290002ff 93%);
  background-size: 
    40% 100%,
    100% 100%;
  background-position: 
    center,
    center;
  background-repeat: 
    no-repeat,
    no-repeat;
  width: 100%;
  height: 150px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1); 
    z-index: 1;
  }
`;

export const Container = styled.section`
  position: relative;
  background: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y; /* Repete verticalmente de forma sutil */
  background-attachment: local; 
  min-height: 100vh; 
  width: 100%;
  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6); 
    z-index: 1;
    pointer-events: none; 
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
`;

export const Content = styled.div`
`;