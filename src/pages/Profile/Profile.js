import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const ProfileContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  
  
  @media screen and (max-width: 1280px) {
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
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
  

  @media screen and (max-width: 1375px) {
    
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

  @media screen and (max-width: 1000px) {
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
  
  @media screen and (max-width: 1375px) {
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
export const SinglePageWrapper = styled.div`
  width: 80vw;
  margin: 0rem auto;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  
  @media screen and (max-width: 1375px) {
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

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }
`;

export const ExchangeCard = styled.div`

background-color: #f0f0f0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px 5vw 1px 5vw;
  }
  @media screen and (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px .4vw 1px .4vw;
  }
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 15px;


  @media screen and (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px 5vw 1px 5vw;
  }
  @media screen and (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px .4vw 1px .4vw;
  }
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const BodyCard = styled.div`

background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px 5vw 1px 5vw;
  }
  @media screen and (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px .4vw 1px .4vw;
  }
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ExchangeCard2 = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px 5vw 1px 5vw;
  }
  @media screen and (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px .4vw 1px .4vw;
  }
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const BalanceCard = styled.div`

background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px 5vw 1px 5vw;
  }
  @media screen and (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px .4vw 1px .4vw;
  }
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const BalanceCard2 = styled.div`

background-color: #42378f;
background-image: linear-gradient(to bottom, #051937, #0a284d, #0c3965, #0b4b7d, #005d96);
  display: flex;
  max-height: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px 5vw 1px 5vw;
  }
  @media screen and (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0px .4vw 1px .4vw;
  }
  

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ChartCard = styled.div`
background-color: #fafafa;

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

  @media screen and (max-width: 1375px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    min-height: 450px;
    margin: 0px 5vw 1px 5vw;
  min-width:  450px;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    padding: 0 10px;
    min-height: 300px;
    margin: 0px .4vw 1px .4vw;
  min-width:  300px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ProfileCard = styled.div`
  background-color: #344055;

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
export const MainCard = styled.div`
  background-color: #344055;
  display: flex;
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
export const MainCard1 = styled.div`
  background-color: #fff;
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
export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 auto;
  
`;
export const HeaderBalance = styled.div`

  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 .5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    align-items: center;
    padding: 8px;
  }
  @media screen and (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0px 2vw 1px .4vw;
  }
  

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
export const ExchangeH2W = styled.h2`
  font-size: 2rem;
  color: white;
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
  color: black;
  margin-bottom: 1rem;
`;
export const ExchangeH3W = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  color: white;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;

export const ExchangeH4 = styled(LinkR)`
  font-size: 1.3rem;
  color:  #1f618d  ;
  font-weight: normal;
  margin-top: .5rem;
  margin-bottom: 1rem;
  
`;
export const BlogHeaderTitle = styled.h1`
  font-size: 1.3rem;
  color:  #0c3965  ;
  font-weight: 900;
  margin-bottom: 3rem;
`;
export const BlogHeadlineTitles = styled(LinkR)`
  font-size: 1.8rem;
  color:  white;
  font-weight: hevy;
  
`;
export const BlogTitles = styled(LinkR)`
  font-size: 1.3rem;
  color:  #0c3965;
  font-weight: 150;
  
`;

export const ExchangeH4Link = styled(LinkR)`
font-size: 3rem;
  color: black;
  font-weight: normal;
  margin-top: .5rem;
  margin-bottom: 1rem;
  
`;
export const ExchangeH4B = styled(LinkR)`
  font-size: 1rem;
  font-weight: normal;
  color: white;
  
  
`;
export const JFCBalanceHead = styled.h4`
  font-size: .1 em;
  font-weight: bold;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;
export const ExchangeH4W = styled(LinkR)`
  font-size: 1rem;
  font-weight: normal;
  margin-top: .5rem;
  color: white;
  margin-bottom: .5rem;
`;

export const AccountNum = styled.h3`
  font-size: .5rem;
  font-weight: heavy;
  margin-top: 1rem;
  color: black;
  margin-bottom: 1rem;

  @media screen and (max-width: 375px) {
    font-size: .6;
  }
`;

export const ExchangeP = styled.p`
  font-size: .7rem;
  text-align: center;
 
`;
export const ExchangePW = styled.p`
  font-size: .7rem;
  text-align: center;
  color: white;
 
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
