import React from 'react'
import './Projects.css'

import ProjectViewer from './ProjectViewer'

function Projects() {
  return (
    <React.Fragment>
      <div id="Projects"></div>
      <div className="Section">
        <h1 className="SectionHeader">Previous Work</h1>
        <div id="GRNSight" className="Subsection">
          <h2 className="SubsectionHeader">GRNSight: Data Visualization</h2>
          <ProjectViewer projectName="GRNSight" />
        </div>
        <div id="CubeSat" className="Subsection">
          <h2 className="SubsectionHeader">
            Cubesat: Communications Engineering
          </h2>
        </div>
        <div id="PlaceHolder" className="Subsection">
          <h2 className="SubsectionHeader">More to come!</h2>
          <p className="SectionText">
            This website is new, and I'm still working on making more of my
            projects easily viewable in this format
          </p>
          <p className="SectionText">Come back soon for more</p>
          <p className="SectionText">
            In the meantime, checkout my github for a variety of projects I've
            worked on
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Projects
