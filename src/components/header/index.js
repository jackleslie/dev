import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import headerStyles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={headerStyles.header}>
    <div className={headerStyles.headerInner}>
      <h1 className={headerStyles.headerTitle}>
        <Link className={headerStyles.headerLink} to="/">
          {siteTitle}
        </Link>
      </h1>
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
