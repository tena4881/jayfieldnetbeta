import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle, rgba(245, 245, 245,1) 0%, rgba(237, 237, 237 ,1) 77%);

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    overflow-x:hidden;
    transition: 0.8s all ease;
    height: auto;
  }
 
  @media screen and (max-width: 375px) {
    max-width: 100vw;
    overflow-x:hidden;
    transition: 0.8s all ease;
    height: auto;
  }
  
`;

export const ExchangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  background: radial-gradient(circle, rgba(245, 245, 245,1) 0%, rgba(237, 237, 237 ,1) 77%);

  @media screen and (max-width: 768px) {
    
    transition: 0.8s all ease;
    height: auto;
  }
 
  @media screen and (max-width: 375px) {
    
    transition: 0.8s all ease;
    height: auto;
  }
  
`;
export const WalletSigninContainer = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, rgba(22, 30, 48,1) 0%, rgba(16, 21, 34 ,1) 77%);

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    height: auto;
  }
 
  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    height: auto;
  }
  
`;

export const ExchangeWrapper = styled.div`
  width: 80vw;
  margin: 0rem auto;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 1100px) {
    width: 100vw;
    overflow-x:hidden;
    margin-bottom: 30px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 375px) {
    width: 100vw;
    overflow-x:hidden;
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

export const ConnectWrapper = styled.div`
  max-width: 1000px;
  margin: 30vh auto;
  display: grid;
  grid-template-columns: 1fr;
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
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    min-height: 300px;
  min-width:  300px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ChartCard = styled.div`
  background: #f5f5f5;
  display: flex;
  min-height: 600px;
  min-width:  600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    min-height: 450px;
  min-width:  450px;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    min-height: 300px;
  min-width:  300px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ProfileCard = styled.div`
  background: #f7f7f7;
  display: flex;
  min-height: 100%;
  min-width:  100%;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: auto;
  margin-bottom: 60px;
  padding: 25px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  
`;

export const ExchangeIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ExchangeH1 = styled.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ExchangeH2 = styled.h2`
  font-size: 2rem;
`;
export const ExchangeH22 = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: green;
`;

export const ExchangeH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;

export const ExchangeH4 = styled(LinkR)`
  font-size: .8rem;
  font-weight: normal;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;

export const AccountNum = styled.h3`
  font-size: .9rem;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 375px) {
    font-size: .6;
  }
`;

export const ExchangeP = styled.p`
  font-size: .7rem;
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
  background: #d9d9d9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000;
  font-size: 19px;
  margin-top: 1rem;
  margin-bottom: .5rem;
  outline: none;
  
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #CC0000;
    color: #fff;
  }
`;

export const StakeBtn = styled(LinkR)`
  border-radius: 50px;
  background: #d9d9d9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000;
  font-size: 19px;
  margin-top: .5rem;
  margin-bottom: .5rem;
  outline: none;
  
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: green;
    color: #fff;
  }
`;
export const UnStakeBtn = styled(LinkR)`
  border-radius: 50px;
  background: #d9d9d9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000;
  font-size: 19px;
  margin-top: .5rem;
  margin-bottom: .5rem;
  outline: none;
  
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
    color: #fff;
  }
`;
export const ConnectBtn = styled.button`
  border-radius: 50px;
  background: #fb3e3e;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
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

export const AddToWalletBTN = styled(LinkR)`
  border-radius: 50px;
  background: #fb3e3e;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
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
export const BackBtn = styled(LinkR)`
  border-radius: 50px;
  background: #F1F1F1;
  white-space: nowrap;
  padding: 5px 11px;
  color: #000;
  font-size: 16px;
  margin-top: 15px;
  outline: none;
  
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
    color: #fff;
  }
`;
