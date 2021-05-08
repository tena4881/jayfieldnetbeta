import { formatUnits , formatEther} from '@ethersproject/units'
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'


const JFC = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8';

export function JFCBalance() {
    const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const { account } = useEthers()
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)

  return (
    <div>
    {jfcBalance && <h3>{formatUnits(jfcBalance, 2)}</h3>}
    </div>
  )
}
export function JFCBalanceBlack() {
    const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const { account } = useEthers()
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)

  return (
    <>
    {jfcBalance && <div> <h4 to='/profile'>You Have <br></br>{formatUnits(jfcBalance, 2)} JFC </h4></div>}
    </>
  )
}

export function EtherBalance() {
  const { account } = useEthers()
  const etherBalance = useEtherBalance(account)

  return (
    <div>
      {etherBalance && <h4>Ξ {formatEther(etherBalance)}</h4>}
    </div>
  )
}
