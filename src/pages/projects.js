import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'
import Portfolio from '../components/portfolio'

const ProjectsPage = ({ data }) => (
  <Layout colour="green" active="projects">
    <SEO title="Projects" />
    <h1>Projects</h1>
    <Portfolio projects={data.projects} colour="green" />
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query {
    projects: allContentfulProject(sort: { fields: date, order: DESC }) {
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
