import { Contract } from '@ethersproject/contracts'
import { formatEther } from '@ethersproject/units'
import { TransactionStatus, useContractCall, useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'
import { utils } from 'ethers'
import jfcAbi from '../../abi/jfcAbi.json'
import { BigNumber } from 'ethers'

const jfcInterface = new utils.Interface(jfcAbi)

export const DepositEth = () => {
    const { account, library } = useEthers()
    const etherBalance = useEtherBalance(account)
    const contract = new Contract('0x557fd4e5c433d5b4565056a42c21f7710776ee2a', jfcInterface, library?.getSigner())
    const { state, send } = useContractFunction(contract, 'deposit', { transactionName: 'Wrap' })
  
    return (
        <>
        <div >
            <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} className="btn btn-primary mt-4 waves-effect waves-light" onClick={handleClick}>25%</button>
            <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} className="btn btn-primary mt-4 waves-effect waves-light" onClick={handleClick}>50%</button>
            <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} className="btn btn-primary mt-4 waves-effect waves-light" onClick={handleClick}>75%</button>
            <button style={{height: 'auto', width : 'auto', marginLeft: '5px'}} className="btn btn-primary mt-4 waves-effect waves-light" onClick={handleClick}>100%</button>
        </div>
      
    </>
      
    )
  }