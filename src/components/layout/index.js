import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from '../footer'
import Header from '../header'

import layoutStyles from './layout.module.css'

const Layout = ({ colour, children, active }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          colour={colour}
          siteTitle={data.site.siteMetadata.title}
          active={active}
        />
        <div className={`${layoutStyles.container} ${layoutStyles[colour]}`}>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  colour: PropTypes.string,
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
}

Layout.defaultProps = {
  colour: 'blue',
  active: 'index',
}

export default Layout
