import React from 'react'
import './Projects.css'

import { FiGithub, FiExternalLink } from 'react-icons'

function ProjectViewer({ projectName, side, githubLink, websiteLink, imgSrc }) {
  if (!(side === 'right' || side === 'left')) side = 'left'
  if (!imgSrc) {
    //try to autoassign image name
    //images should be stord as projectName.png
    //so worth trying
    imgSrc = projectName + '.png'
  }

  try {
    //try to open image
  } catch {
    //if not present, put a placeholder image or maybe just a failed to load box
  }

  const projImage = <img src="/GRNSight.png" />

  return (
    <div id={projectName} className="ProjectSection">
      <p>Hello</p>
      {projImage}
    </div>
  )
}

export default ProjectViewer
