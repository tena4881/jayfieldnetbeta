import { formatUnits , formatEther} from '@ethersproject/units'
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'

import {
  ExchangeContainer,
  ExchangeWrapper,
  ProfileContainer,
  ExchangeCard,
  ExchangeH2,
  ExchangeH3,
  ExchangeH4W,
  ExchangeH4B,
  ExchangeH1,
  ExchangeP,
  AccountNum,
  ProfileCard,
  ExchangeH2W,
  ExchangeH3W,
  HeaderBalance,
  BalanceCard,
  ExchangePW,
  ConnectBtn,
  ChartCard,
  ExchangeH4
} from './pages/Profile/Profile';

const JFC = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8';

export function JFCBalance() {
    const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const { account } = useEthers()
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)

  return (
    <div>
    {jfcBalance && <ExchangeH3>{formatUnits(jfcBalance, 2)}</ExchangeH3>}
    </div>
  )
}
export function JFCBalanceBlack() {
    const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const { account } = useEthers()
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)

  return (
    <>
    {jfcBalance && <HeaderBalance> <ExchangeH4B to='/profile'>You Have <br></br>{formatUnits(jfcBalance, 2)} JFC </ExchangeH4B></HeaderBalance>}
    </>
  )
}

export function EtherBalance() {
  const { account } = useEthers()
  const etherBalance = useEtherBalance(account)

  return (
    <div>
      {etherBalance && <ExchangeH4>Ξ {formatEther(etherBalance)}</ExchangeH4>}
    </div>
  )
}