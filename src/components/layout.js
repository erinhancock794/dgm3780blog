import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, textDecoration: `none`}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title} </Link>
        
      </h1>
    )
    
  } else {
    header = (
      
      <Link className="header-link-home" to="/">
        {title}
        
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <Link to="/" style={{ textShadow: `none`,textDecoration: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline`}}>JavaScript frameworks and stuff</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, textDecoration: `none`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
        </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
