import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ExchangeContainer = styled.div`
  height: 800px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ##f7f7f7;
  margin-bottom: 250px;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    height: 1100px;
  }
 
  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
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

  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

export const ExchangeCard = styled.div`
  background: #fff;
  display: flex;
  background: #fcfcfc;
  min-height: 350px;
  min-width:  350px;
  flex-direction: column;
  justify-content: center;
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
  font-size: 2.8rem;
  color: #000;
  margin-bottom: 10px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ExchangeH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ExchangeH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ExchangeP = styled.p`
  font-size: .7rem;
  margin-top: .1rem;
  text-align: center;
 
`;

export const SubtitleP = styled.p`
  font-size: 1rem;
  margin-top: .1rem;
  margin-bottom: 20px;
  text-align: center;
 
`;

export const BurnBtn = styled(LinkR)`
  border-radius: 50px;
  background: #CC0000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  margin-top: 2rem;
  outline: none;
  
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;

export const StakeBtn = styled(LinkR)`
  border-radius: 50px;
  background: #00b300;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  margin-top: 2rem;
  outline: none;
  
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;
