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
  ExchangeH1,
  ExchangeP,
  AccountNum,
  ProfileCard,
  ExchangeH2W,
  ExchangeH3W,
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
    {jfcBalance && <ExchangeH3W>{formatEther(jfcBalance)}</ExchangeH3W>}
    </div>
  )
}

export function EtherBalance() {
  const { account } = useEthers()
  const etherBalance = useEtherBalance(account)

  return (
    <div>
      {etherBalance && <ExchangeH3W>{formatEther(etherBalance)}</ExchangeH3W>}
    </div>
  )
}