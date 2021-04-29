import Linktree from "../../components/Linktree"
import NoJFC from "../../components/NoJFC";
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'
import AccountHeader from '../../components/AccountHeader'
import { formatUnits , formatEther} from '@ethersproject/units'
export function TPPage1() {
  const JFC_ADDRESS = '0xe5d9D8EEB5b225A465523e2065834d9EC0Ed9aB8'
  const { account } = useEthers()
  const jfcBalance = useTokenBalance(JFC_ADDRESS, account)
  const jfcBal = formatUnits(jfcBalance, 2)
  return (
    <div>
    {jfcBal >= 339 ? (
      <>
      <AccountHeader/>
      <Linktree/>
      </>
    ) : (
        <>
        <AccountHeader/>
        <NoJFC/>
        
      </>
    )}
    
    </div>
  )
}

