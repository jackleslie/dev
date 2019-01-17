import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import photoStyles from './photos.module.css'

const PhotosPage = ({ data }) => (
  <Layout colour="yellow" active="photos">
    <SEO title="Photos" />
    <h1>Photos</h1>
    <div className={photoStyles.container}>
      {data.photos.edges.map(({ node }) => (
        <Img
          className={photoStyles.photo}
          fluid={node.fluid}
          alt={node.title}
        />
      ))}
    </div>
  </Layout>
)

export default PhotosPage

export const pageQuery = graphql`
  query {
    photos: allContentfulAsset {
      edges {
        node {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
          title
        }
      }
    }
  }
`
