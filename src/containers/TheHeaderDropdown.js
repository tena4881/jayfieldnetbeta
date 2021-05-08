import React,  {useContext} from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import WalletContext from '../wallet'
const TheHeaderDropdown = () => {
  const {account,deactivate} = useContext(WalletContext)
  return (
    <>
    {account ?
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/secondProfilePic.png'}
            className="c-avatar-img"
            alt={account}
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>

        <CDropdownItem>
          <a onClick={deactivate}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
          </a>

        </CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
    :
    <></>
    }
    </>
  )
}

export default TheHeaderDropdown
