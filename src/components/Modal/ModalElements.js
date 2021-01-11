import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';



export const ModalCard = styled.div`
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

 
`;

export const ModalH1 = styled.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
  margin-top: 15vh;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ModalH2 = styled.h2`
  font-size: 2rem;
`;
export const ModalH22 = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: green;
`;

export const ModalH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;

export const ModalP = styled.p`
  font-size: .7rem;
  text-align: center;
 
`;

export const SubtitleP = styled.p`
  font-size: 1rem;
  margin-top: .1rem;
  margin-bottom: 20px;
  text-align: center;
 
`;

export const StakeBtn = styled.button`
  border-radius: 50px;
  background: #d9d9d9;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000;
  font-size: 19px;
  margin-top: 2rem;
  
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
export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #f5f5f5;
  border: solid;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;