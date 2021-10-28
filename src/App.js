import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import BaseContext from './context'

import routes from './router'

function App() {
  const [routesList, setRoutesList] = useState([])

  const getRoutes = async () => {
    if (!routesList.length) setRoutesList(await routes())
  }

  useEffect(() => {
    getRoutes()
    // eslint-disable-next-line
  }, [])

  return (
    <BaseContext.Provider value={{ hasMenuOpen: false }}>
      <Router>
        <Layout>
          {routesList.length > 0
            ? routesList.map(({ path, meta, component: Component, ...attrs }) => (
                <Route
                  key={path}
                  path={path}
                  render={props => <Component meta={meta} {...props} />}
                  {...attrs}
                />
              ))
            : ''}
        </Layout>
      </Router>
    </BaseContext.Provider>
  )
}

export default App
