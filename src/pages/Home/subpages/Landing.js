import React from 'react'
import './Landing.css'

function Landing() {
  return (
    <React.Fragment>
      <div id="Home" alt="workaround styling section"></div>
      <div className="landing">
        <p id="NameIntro">Hi, I'm</p>
        <h1 id="NameTitle">Ian Green</h1>
        <p id="NameSubtitle">
          <strong>Full</strong>-stack developer
        </p>
      </div>
    </React.Fragment>
  )
}

export default Landing
