import React from 'react'
import PropTypes from 'prop-types'

import Project from '../project'

import portfolioStyles from './portfolio.module.css'

const Portfolio = ({ projects, colour }) => (
  <div className={portfolioStyles.container}>
    {projects.edges.map(({ node }) => (
      <Project project={node} colour={colour} />
    ))}
  </div>
)

Portfolio.propTypes = {
  projects: PropTypes.object.isRequired,
  colour: PropTypes.string,
}

Portfolio.defaultProps = {
  colour: 'blue',
}

export default Portfolio
