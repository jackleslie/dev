import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import galleryStyles from './gallery.module.css'

const Gallery = ({ photos }) => (
  <div className={galleryStyles.container}>
    {photos.edges.map(({ node }) => (
      <Img
        className={galleryStyles.photo}
        fluid={node.fluid}
        alt={node.title}
      />
    ))}
  </div>
)

Gallery.propTypes = {
  photos: PropTypes.object.isRequired,
}

export default Gallery
