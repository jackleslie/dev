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
      with JavaScript.
    </p>
    <h2>Latest Projects</h2>
    <div className={indexStyles.container}>
      {data.projects.edges.map(({ node }) => (
        <Project colour="blue" project={node} />
      ))}
    </div>
    <h2>Latest Photos</h2>
    <div className={indexStyles.container}>
      {data.photos.edges.map(({ node }) => (
        <Img
          className={indexStyles.photo}
          fluid={node.fluid}
          alt={node.title}
        />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    photos: allContentfulAsset(limit: 4) {
      edges {
        node {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
          title
        }
      }
    }
    projects: allContentfulProject(
      limit: 2
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          description
          link
          event
          award
          issuer
          competition
        }
      }
    }
  }
`
