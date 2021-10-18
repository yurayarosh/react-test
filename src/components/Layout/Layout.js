import Header from '../Header/Header'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header className="layout__header" />
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">footer</footer>
    </div>
  )
}

export default Layout
