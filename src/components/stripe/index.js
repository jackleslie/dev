import React, { useState } from 'react'
import PropTypes from 'prop-types'

import stripeStyles from './stripe.module.css'

const Stripe = ({ colour, position, title, children }) => {
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
          <h1 className={stripeStyles.stripeTitle}>{title}</h1>
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
  position: PropTypes.number,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Stripe.defaultProps = {
  colour: 'blue',
  position: 0,
}

export default Stripe
