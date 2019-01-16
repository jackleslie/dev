import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import aboutStyles from './about.module.css'

const AboutPage = () => (
  <Layout colour="pink" active="about">
    <SEO title="About" />
    <h1>About</h1>
    <p>
      You can find me on{' '}
      <a
        className={aboutStyles.twitter}
        href="https://twitter.com/jackjdleslie"
      >
        twitter
      </a>{' '}
      and fire me a DM, or if you're feeling fancy you can connect with me on{' '}
      <a
        className={aboutStyles.linkedIn}
        href="https://linkedin.com/in/jackjdleslie"
      >
        linkedin
      </a>
      . If you're really cool you can get me on{' '}
      <a className={aboutStyles.keybase} href="https://keybase.io/jackleslie">
        keybase
      </a>
      , or feel free to send me an{' '}
      <a
        href="mailto:jackleslie@protonmail.com"
        className={aboutStyles.protonmail}
      >
        email
      </a>
      .
    </p>
  </Layout>
)

export default AboutPage
