import React from 'react'
import './Projects.css'

import ProjectViewer from '../../components/ProjectViewer'

export default function Projects() {
  const projectList = require('../../data/projects.json')
  let i = 0
  return (
    <div className="Section" id="Projects">
      <h1
        className="SectionHeader"
        id="ProjectHeader"
        style={{ textAlign: 'center' }}
      >
        Projects
      </h1>
      {projectList.projects.map((project) => {
        return (
          <ProjectViewer
            name={project.name}
            key={project.name}
            description={project.description}
            subtitle={project.subtitle}
            side={i++ % 2 === 0 ? 'left' : 'right'}
            // Below: not entirely required but.... just do it
            github={project?.github}
            website={project?.website}
            image={project?.image}
            skills={project?.skills}
          />
        )
      })}
    </div>
  )
}
