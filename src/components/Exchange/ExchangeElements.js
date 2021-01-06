import styled from 'styled-components';

export const ExchangeContainer = styled.div`
  height: 800px;
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ##f7f7f7;
  margin-bottom: 250px;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    height: 1100px;
  }
 
  @media screen and (max-width: 480px) {
    transition: 0.8s all ease;
    height: 1300px;
  }
  
`;

export const ExchangeWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  justify-items: center;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

export const ExchangeCard = styled.div`
  background: #fff;
  display: flex;
  background: #fcfcfc;
  min-height:  500px;
  min-width:  500px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 800px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ExchangeIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ExchangeH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ExchangeH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ExchangeP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
