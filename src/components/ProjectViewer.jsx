import React from 'react'
import './ProjectViewer.css'

import useIntersectionObserver from '../hooks/use-intersection-observer'

import { FiGithub, FiExternalLink } from 'react-icons/fi'

function ProjectViewer({
  name,
  subtitle,
  description,
  github,
  website,
  image,
  side,
}) {
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

  //get images
  let imgSrc = 'images/'
  imgSrc += image ? image : 'binary_code.jpeg'

  //because of alternating sides
  if (!side || !(side === 'right' || side === 'left')) side = 'left'

  return (
    <div id={name} ref={ref} className="ProjectViewerSection">
      <div className={'ProjectViewer ' + (isVisible ? 'visible' : '')}>
        <img
          style={{ gridRow: '1', gridColumn: side === 'left' ? '1' : '2' }}
          src={imgSrc}
          className="ProjectImage"
          alt="Project example"
        />
        <div
          className="TitleCard"
          style={{ gridRow: '1', gridColumn: side === 'left' ? '2' : '1' }}
        >
          <h2 className="ProjectName">{name}</h2>
          <h3 className="ProjectSubtitle">{subtitle}</h3>
          <div className="LinkContainer">
            {github && (
              <button className="LinkButton">
                <a href={github} className="InlineLink">
                  <FiGithub />
                </a>
              </button>
            )}
            {website && (
              <button className="LinkButton">
                <a href={website} className="InlineLink">
                  <FiExternalLink />
                </a>
              </button>
            )}
          </div>
          <p className="ProjectDescription SectionText">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectViewer
