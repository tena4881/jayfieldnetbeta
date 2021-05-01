import { useEffect, useState,useContext } from "react";
import { useMetamask } from "use-metamask";
import Web3 from "web3";
import { Contract } from '@ethersproject/contracts'
import { Link } from "react-router-dom";
import jfcVaultAbi from './abi/jfcVaultAbi.json'
import { utils } from 'ethers'
import styled from 'styled-components'
import { Button } from './components/base/button'
import UserContext from './components/User/user'
import { TransactionStatus, useContractCall, useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'
import { BorderRad, Colors } from './global/styles'
const JFVaultInterface = new utils.Interface(jfcVaultAbi)
export default function Contribute() {
	const {account, library } = useContext(UserContext);
	const etherBalance = useEtherBalance(account)
  	const contract = new Contract('0x557FD4e5C433D5B4565056A42c21f7710776EE2A', JFVaultInterface, library?.getSigner())
  	const { state, send } = useContractFunction(contract, 'Contribute', { transactionName: 'Contribute' })
  
	const [amount, setAmount] = useState();

	const onClick = () => {
		console.log(parseFloat(amount))
		
	  }

	  
const InputComponent = ({ ticker, transactionStatus, send }) => {           
	const [value, setValue] = useState('0')
	const isMining = transactionStatus === 'Mining'
	const buttonContent = isMining ? (
	  <p>Loading</p>
	) : (
	  'Contribute'
	)
	const onClick = () => {
		console.log(utils.format(value))
	  send(utils.parseEther(value))
	  setValue('0')
	}
  
	return (
	  <InputRow>
		<Input
		  id={`${ticker}Input`}
		  type="number"
		  step="0.01"
		  min="0"
		  value={value}
		  onChange={(e) => setValue(e.currentTarget.value)}
		/>
		<FormTicker>{ticker}</FormTicker>
		<SmallButton disabled={!account || isMining} onClick={onClick}>
		  {buttonContent}
		</SmallButton>
	  </InputRow>
	)
  }
	const TransactionForm = ({ balance, send, title, ticker, transaction }) => {
		return (
			<InputComponent ticker={ticker} transactionStatus={transaction.status} send={send} />
		
		)
	}
	

  
	  return (
		<TransactionForm
		  balance={etherBalance}
		  send={(value) => send({ value })}
		  title="Wrap Ether"
		  ticker="ETH"
		  transaction={state}
		/>
	  )

  
}



const InputRow = styled.div`
  display: flex;
  margin: 0 auto;
  color: white;
  align-items: center;
  border: ${Colors.Gray['300']} 1px solid;
  border-radius: ${BorderRad.m};
  overflow: hidden;
`


const Input = styled.input`
  height: 100%;
  width: 100px;
  padding: 0 0 0 24px;
  border: 0;
  border-radius: ${BorderRad.m};
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: transparent auto 1px;
  }
  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${Colors.Black['900']};
  }
`
const SmallButton = styled(Button)`
  display: flex;
  justify-content: center;
  min-width: 95px;
  height: unset;
  padding: 8px 24px;
  &:disabled {
    color: ${Colors.Gray['600']};
    cursor: unset;
  }
  &:disabled:hover,
  &:disabled:focus {
    background-color: unset;
    color: unset;
  }
`

const FormTicker = styled.div`
  padding: 0 16px;
  font-weight: 1000;
`