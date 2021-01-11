import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const MediaContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    height: 100%;
  }
 
  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
    height: 100%;
  }
  
`;
export const WalletSigninContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, rgba(22, 30, 48,1) 0%, rgba(16, 21, 34 ,1) 77%);

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }
 
  @media screen and (max-width: 375px) {
    transition: 0.8s all ease;
  }
  
`;

export const MediaWrapper = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
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

export const MediaCard = styled.div`
  background: #f5f5f5;
  display: block;
  min-height: 350px;
  min-width:  350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

 

`;
export const ProfileCard = styled.div`
  background: #fafafa;
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
  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  
`;

export const MediaIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const MediaH1 = styled.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MediaH2 = styled.h2`
  font-size: 2rem;
`;
export const MediaH22 = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: green;
`;

export const MediaH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;
export const AccountNum = styled.h3`
  font-size: .9rem;
  font-weight: normal;
  margin-top: .5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 375px) {
    font-size: .6;
  }
`;

export const MediaP = styled.p`
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
  background: #ffc800;
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
  font-size: 12px;
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
