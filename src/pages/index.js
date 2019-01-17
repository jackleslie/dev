import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'

import indexStyles from './index.module.css'

const IndexPage = ({ data }) => (
  <Layout colour="blue">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome</h1>
    <p>
      I'm a penultimate year CS student at the University of St Andrews in
      Scotland, currently looking for experience in full-stack web development
      with JavaScript. I have a background in front-end development with React
      and dapp development on Ethereum.
      <br />
      I'm a keen hackathon-goer and photographer - feel free to browse my
      projects and photos on this site. It was built with Gatsby and Contentful,
      and is being hosted on Netlify.
    </p>
    <h2>Latest Projects</h2>
    <div className={indexStyles.container}>
      {data.projects.edges.map(({ node }) => (
        <Project colour="blue" project={node} />
      ))}
    </div>
    <h2>Latest Photos</h2>
    <div className={indexStyles.container}>
      {data.contentfulGallery.photos.map(photo => (
        <Img className={indexStyles.photo} fluid={photo.fluid} />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    contentfulGallery {
      photos {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
    }
    projects: allContentfulProject {
      edges {
        node {
          title
          description
          link
        }
      }
    }
  }
`
