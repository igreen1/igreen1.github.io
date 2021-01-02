import React from 'react'
import './ProjectViewer.css'

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
  let imgSrc = 'images/'
  imgSrc += image ? image : 'binary_code.jpeg'

  if (!side || !(side === 'right' || side === 'left')) side = 'left'

  const flipSide = () => {
    return side === 'right' ? 'left' : 'right'
  }

  return (
    <div id={name} className="ProjectSection">
      <img src={imgSrc} className="ProjectImage" />
      <div className="TitleCard" style={{ float: flipSide() }}>
        <h2 className="ProjectName">{name}</h2>
        <h3 className="ProjectSubtitle">{subtitle}</h3>

        <button onClick={() => console.log('hello')} className="GithubLink">
          <FiGithub />
        </button>
        <p
          className="ProjectDescription SectionText"
          style={{ float: flipSide() }}
        >
          {description}
        </p>
      </div>
      {/* <div className="ProjectDescriptionContainer"></div> */}
    </div>
  )
}

export default ProjectViewer
