import React from 'react'
import PropTypes from 'prop-types'

import projectStyles from './project.module.css'

const Project = ({ project, colour }) => (
  <div className={`${projectStyles.container} ${projectStyles[colour]}`}>
    <a href={project.link}>
      <h3 className={projectStyles.projectTitle}>{project.title}</h3>
    </a>
    <h4 className={projectStyles.projectDescription}>{project.description}</h4>
  </div>
)

Project.propTypes = {
  project: PropTypes.object.isRequired,
  colour: PropTypes.string,
}

Project.defaultProps = {
  colour: 'blue',
}

export default Project
