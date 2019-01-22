import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Gallery from '../../components/gallery'

import photoStyles from './photos.module.css'

const PhotosPage = ({ data }) => (
  <Layout colour="yellow" active="photos">
    <SEO title="Photos" />
    <h1>Photos</h1>
    <Gallery photos={data.photos} />
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
