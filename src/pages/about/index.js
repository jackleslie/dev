import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import aboutStyles from './about.module.css'

const AboutPage = () => (
  <Layout colour="pink" active="about">
    <SEO title="About" />
    <h1>About</h1>
    <p>
      I'm a penultimate year CS student at the University of St Andrews in
      Scotland, currently looking for experience in full-stack web development
      with JavaScript. I have a background in front-end development with React
      and dapp development on Ethereum.
      <br /> <br />
      I'm a keen hackathon-goer and photographer, feel free to browse my
      projects and photos on this site. It was built with Gatsby and Contentful,
      and is being hosted on Netlify.
      <br /> <br />
      You can find me on{' '}
      <a
        target="_blank"
        className={aboutStyles.twitter}
        href="https://twitter.com/jackjdleslie"
      >
        twitter
      </a>{' '}
      and fire me a DM, or if you're feeling fancy you can connect with me on{' '}
      <a
        target="_blank"
        className={aboutStyles.linkedIn}
        href="https://linkedin.com/in/jackjdleslie"
      >
        linkedin
      </a>
      . If you're really cool you can get me on{' '}
      <a
        target="_blank"
        className={aboutStyles.keybase}
        href="https://keybase.io/jackleslie"
      >
        keybase
      </a>
      , or feel free to send me an{' '}
      <a
        target="_blank"
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
