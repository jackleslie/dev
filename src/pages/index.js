import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome</h1>
    <p>
      We gotta burn the rain forest, dump toxic waste, pollute the air, and rip
      up the OZONE! 'Cause maybe if we screw up this planet enough, they won't
      want it anymore! Is this my espresso machine? Wh-what is-h-how did you get
      my espresso machine? Checkmate...
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      Jaguar shark! So tell me - does it really exist? Yeah, but your scientists
      were so preoccupied with whether or not they could, they didn't stop to
      think if they should. I gave it a cold? I gave it a virus. A computer
      virus. Hey, you know how I'm, like, always trying to save the planet?
      Here's my chance.
    </p>
  </Layout>
)

export default IndexPage
