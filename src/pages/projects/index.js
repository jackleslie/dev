import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Project from '../../components/project'

import projectsStyles from './projects.module.css'

const ProjectsPage = ({ data }) => (
  <Layout colour="green" active="projects">
    <SEO title="Projects" />
    <h1>Projects</h1>
    <div className={projectsStyles.container}>
      {data.projects.edges.map(({ node }) => (
        <Project project={node} colour="green" />
      ))}
    </div>
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query {
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
