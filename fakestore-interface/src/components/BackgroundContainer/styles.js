import styled from "styled-components";
import Background from '../../assets/Background.png';

export const Container = styled.section`
  position: relative;
  background: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y;
  background-attachment: local; 
  min-height: ${props => props.minHeight};
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, ${props => props.opacity}); 
    z-index: 1;
    pointer-events: none; 
  }
  
  > * {
    position: relative;
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center top;
  }
`;