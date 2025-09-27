import styled from 'styled-components';

export const NavigationContainer = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(41, 0, 2, 0.8));
  margin-top: 2rem;
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const NavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  /* Variantes de cor */
  ${props => {
        switch (props.variant) {
            case 'primary':
                return `
          background: linear-gradient(135deg, #290002, #3d0003);
          color: white;
          box-shadow: 0 4px 15px rgba(41, 0, 2, 0.3);
          
          &:hover {
            background: linear-gradient(135deg, #3d0003, #5a0004);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(41, 0, 2, 0.4);
          }
        `;
            case 'secondary':
                return `
          background: linear-gradient(135deg, #6c757d, #5a6268);
          color: white;
          box-shadow: 0 4px 15px rgba(108, 117, 125, 0.3);
          
          &:hover {
            background: linear-gradient(135deg, #5a6268, #4e5559);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(108, 117, 125, 0.4);
          }
        `;
            case 'cart':
                return `
          background: linear-gradient(135deg, #28a745, #20c997);
          color: white;
          box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
          
          &:hover {
            background: linear-gradient(135deg, #218838, #1e7e34);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
          }
        `;
            case 'about':
                return `
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
          
          &:hover {
            background: linear-gradient(135deg, #0056b3, #003d7a);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
          }
        `;
            case 'contact':
                return `
          background: linear-gradient(135deg, #ffc107, #e0a800);
          color: #333;
          box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
          
          &:hover {
            background: linear-gradient(135deg, #e0a800, #c69500);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);
          }
        `;
            case 'support':
                return `
          background: linear-gradient(135deg, #17a2b8, #138496);
          color: white;
          box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
          
          &:hover {
            background: linear-gradient(135deg, #138496, #0f6674);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(23, 162, 184, 0.4);
          }
        `;
            default:
                return `
          background: linear-gradient(135deg, #6c757d, #5a6268);
          color: white;
        `;
        }
    }}
  
  &:active {
    transform: translateY(0);
  }
  
  /* Efeito de ondulação ao clicar */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
`;

export const ButtonIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ButtonText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  text-align: center;
  line-height: 1.2;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ButtonSubtext = styled.span`
  font-size: 0.85rem;
  opacity: 0.8;
  text-align: center;
  line-height: 1.1;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

