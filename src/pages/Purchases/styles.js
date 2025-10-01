import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0ff;
  text-align: center;
`;

export const PurchaseCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0px 4px 12px rgba(0, 255, 255, 0.2);

  h3 {
    margin: 0 0 10px;
    color: #0ff;
  }

  p {
    margin: 4px 0;
    font-size: 0.95rem;
    color: #ccc;
  }
`;
