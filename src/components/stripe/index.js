import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Link from '../link'

import stripeStyles from './stripe.module.css'

const Stripe = ({ colour, to, position, title, children }) => {
  const [active, setActive] = useState(null)
  const positionClass = `stripeActive${position}`

  return (
    <div
      className={`${stripeStyles.stripe} ${stripeStyles[colour]} ${
        active
          ? `${stripeStyles.stripeActive} ${stripeStyles[positionClass]}`
          : null
      }`}
      onClick={() => setActive(!active)}
    >
      <div className={stripeStyles.stripeInner}>
        <div className={stripeStyles.stripeNavigation}>
          <Link className={stripeStyles.stripeLink} to={to}>
            {title}
          </Link>
          <div className={stripeStyles.stripeSubsection}>
            <div
              className={`${stripeStyles.divider} ${
                active ? stripeStyles.dividerActive : null
              }`}
            />
            <p className={stripeStyles.stripeText}>{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Stripe.propTypes = {
  colour: PropTypes.string,
  to: PropTypes.string,
  position: PropTypes.number,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Stripe.defaultProps = {
  colour: 'blue',
  position: 0,
  to: '/',
}

export default Stripe
