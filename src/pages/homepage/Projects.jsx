import React from 'react'
import './Projects.css'

import ProjectViewer from '../../components/ProjectViewer'
import useIntersectionObserver from '../../hooks/use-intersection-observer'

export default function Projects() {
  const projectList = require('../../data/projects.json')
  let i = 0

  //Load when in view
  const ref = React.useRef()
  const [isVisible, setIsVisible] = React.useState(false)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true)
        observerElement.unobserve(ref.current)
      }
    },
  })

  return (
    <div
      ref={ref}
      className="Section"
      id="ProjectSection"
      style={{ height: `${projectList.projects.length * 42}vh` }}
    >
      {isVisible && (
        <div className={isVisible ? 'visible' : ''}>
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
      )}
    </div>
  )
}
