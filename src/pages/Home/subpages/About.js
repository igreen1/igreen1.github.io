import React from 'react'
import './About.css'

function About() {
  return (
    <React.Fragment>
      <div id="About"></div>
      <div className="Section">
        <h1 className="SectionHeader">About</h1>
        <ul id="AboutIntro">
          <li id="AboutText">
            {/* <div id="AboutText"> */}
            <p className="SectionText">
              Hi, I'm Ian - a Electrical Engineering and Computer Science major
              at Loyola Marymount University in LA. I am looking for post-grad
              opportunities anywhere in the world
            </p>
            <br />
            <p className="SectionText">
              I am interested in hardware/software interfacing and primarily
              look to work in systems-level software engineering. I excel in
              utilizing my in-depth knowledge of computers to optimize programs.
              However, I am also skilled in the whole stack: from hardware to
              frontend.
            </p>
            {/* </div> */}
          </li>
          <li id="AboutPic">
            <img
              id="PicOfMe"
              src="https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png"
              alt="Placeholder"
            />
          </li>
        </ul>
        <div className="Subsection" id="Skills">
          {/* todo */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default About
