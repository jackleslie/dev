import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import headerStyles from './header.module.css'

const Header = ({ siteTitle, colour, active }) => (
  <div className={headerStyles.header}>
    <div className={headerStyles.headerInner}>
      <h1 className={headerStyles.headerTitle}>
        <Link
          id={
            active === 'index'
              ? headerStyles.blueLinkActive
              : headerStyles.blueLink
          }
          className={headerStyles.headerTitleLink}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <div className={headerStyles.headerNavigation}>
        <Link
          id={
            active === 'about'
              ? headerStyles.pinkLinkActive
              : headerStyles.pinkLink
          }
          className={headerStyles.headerNavigationLink}
          to="/about"
        >
          About
        </Link>
        <div className={headerStyles.headerSpacer}>x</div>
        <Link
          id={
            active === 'photos'
              ? headerStyles.yellowLinkActive
              : headerStyles.yellowLink
          }
          className={headerStyles.headerNavigationLink}
          to="/photos"
        >
          Photos
        </Link>
        <div className={headerStyles.headerSpacer}>x</div>
        <Link
          id={
            active === 'projects'
              ? headerStyles.greenLinkActive
              : headerStyles.greenLink
          }
          className={headerStyles.headerNavigationLink}
          to="/projects"
        >
          Projects
        </Link>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  colour: PropTypes.string,
  active: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  colour: 'blue',
  active: 'index',
}

export default Header
