import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

import linkStyles from './link.module.css'

const Link = ({ children, ...props }) => (
  <GatsbyLink className={linkStyles.link} {...props}>
    {children}
  </GatsbyLink>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Link
