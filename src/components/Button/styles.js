import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: #f1debb;
  border: 2px solid transparent;
  border-radius: 8px;
  font-family: 'Road Rage', sans-serif;
  font-weight: bold;
  color: #20262a;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-color: #f23c34;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(242, 60, 52, 0.25), /* base #f23c34 */
      rgba(255, 255, 255, 0.15),
      rgba(242, 60, 52, 0.25)
    );
    z-index: -1;
    transition: all 0.4s ease;
  }

  &:hover {
    color: #000;
    box-shadow: 0 0 12px 3px rgba(242, 60, 52, 0.5);
  }

  &:hover:before {
    left: 0;
  }

  &:active {
    transform: scale(0.97);
    box-shadow: inset 0 4px 6px rgba(242, 60, 52, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(242, 60, 52, 0.3);
  }

  &:disabled {
    background-color: #ccc;
    color: #888;
    cursor: not-allowed;
  }
`;