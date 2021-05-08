import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://jayfieldnet.io" target="_blank" rel="noopener noreferrer">JFNET</a>
        <span className="ml-1">&copy; 2021 JayFieldNet.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">Ether</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
