import React from 'react'
import PropTypes from 'prop-types'

import footerStyles from './footer.module.css'

const Footer = ({ ...props }) => (
  <footer className={footerStyles.footer} {...props}>
    <div className={footerStyles.footerInner}>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a className={footerStyles.footerLink} href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
