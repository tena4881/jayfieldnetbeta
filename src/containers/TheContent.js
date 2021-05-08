import React, { Suspense, useContext } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import WalletContext from '../wallet'
// routes config
import routes from '../routes'
import Login from '../views/pages/login/Login'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  const {account, activateBrowserWallet,deactivate} = useContext(WalletContext);
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <>
                    {account ?
                    <>
                    {/* <button onClick={deactivate}>deactivate</button> */}
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                    </>:
                    <Login/>
                    }
                    </>
                  )} />
              )
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
