import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout colour="blue">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome</h1>
    <p>
      We gotta burn the rain forest, dump toxic waste, pollute the air, and rip
      up the OZONE! 'Cause maybe if we screw up this planet enough, they won't
      want it anymore! Is this my espresso machine? Wh-what is-h-how did you get
      my espresso machine? Checkmate...
    </p>
  </Layout>
)

export default IndexPage
