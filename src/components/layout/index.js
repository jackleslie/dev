import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Stripe from '../stripe'

import layoutStyles from './layout.module.css'

const Layout = ({ children }) => (
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
      <div className={layoutStyles.container}>
        <Stripe position={0} title={data.site.siteMetadata.title}>
          Penultimate year CS Student at the University of St Andrews
        </Stripe>
        <Stripe position={1} colour="green" to="/about" title="Projects">
          Side hustles, open source contributions and offensive hackathon
          projects
        </Stripe>
        <Stripe position={2} colour="silver" to="/blog" title="Blog">
          Musings about learning how to write code and exploring various topics
          and tools
        </Stripe>
        <Stripe position={3} colour="grey" to="/contact" title="Contact">
          Contact details and links if you want to reach out
        </Stripe>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
