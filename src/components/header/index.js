import React from 'react'
import PropTypes from 'prop-types'

import Link from '../link'

import headerStyles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={headerStyles.header}>
    <div className={headerStyles.headerInner}>
      <h1 className={headerStyles.headerTitle}>
        <Link className={headerStyles.headerTitleLink} to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className={headerStyles.headerNavigation}>
        <Link className={headerStyles.headerLink} to="/about">
          About
        </Link>
        <Link className={headerStyles.headerLink} to="/blog">
          Blog
        </Link>
        <Link className={headerStyles.headerLink} to="/projects">
          Projects
        </Link>
        <Link className={headerStyles.headerLink} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
