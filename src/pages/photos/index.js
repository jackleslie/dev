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
      {data.contentfulGallery.photos.map(photo => (
        <Img className={photoStyles.photo} fluid={photo.fluid} />
      ))}
    </div>
  </Layout>
)

export default PhotosPage

export const pageQuery = graphql`
  query {
    contentfulGallery {
      photos {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
