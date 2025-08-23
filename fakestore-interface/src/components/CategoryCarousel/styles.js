import styled from "styled-components";

export const Container = styled.div`

    position: relative;
    padding: 10px 60px;

    .carousel-item {
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex: 0 0 auto;
        width: calc(25% - 20px);

        @media (max-width: 1280px) {
            width: calc(33.33% - 16px); /* 3 itens tablet */
        }
        
        @media (max-width: 690px) {
            width: calc(50% - 16px); /* 2 itens mobile */
        }
    }

`;

export const Title = styled.h2`
    font-size: 50px;
    color: #00afd2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Road Rage', sans-serif;
    position: relative;
    z-index: 2;

    &::after {
        content: '';
        position: absolute;
        width: 200px;
        height: 7px;
        background-color: #00afd2;
        left: 50%;
        transform: translateX(-50%);
        bottom: -2px;
    }
    @media (max-width: 690px) {
        font-size: 40px;
        
        &::after {
            width: 150px;
        }

    @media (max-width: 480px) {
        font-size: 32px;
        
        &::after {
            width: 120px;
        }
    }
    }
`;

export const ContainerItems = styled.div`
    position: relative;
    background: url(${(props) => props.imageUrl});
    background-size: 100% 100%; 
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    width: 80%; 
    height: 200px;
    border-radius: 8px; 
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra sutil */
    cursor: pointer; /* ADICIONADO - indica que é clicável */
    
    
    &:hover {
        transform: scale(1.2); 
        transition: transform 0.3s ease-in-out; 
    }

    @media (max-width: 690px) {
        width: 100%; 
    }
    @media (max-width: 480px) {
        height: 150px; 
    }
    
`;