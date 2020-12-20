import React from 'react'
import './HomePage.css'

import Landing from './subpages/Landing'

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="Spacer"></div>
      <Landing />

      <div className="About">
        <h className="SectionHeader">About</h>
        <p className="SectionText">Hi, I'm Ian. I am blank</p>
        <p className="SectionText">I want work in blank field</p>
        <p className="SectionText">I study at / have done</p>
        <p className="SectionText">My skills include</p>
      </div>
      <div className="Resume">
        <h className="SectionHeader">Previous Work</h>
        {/* Put a list here (so probably router?) */}
      </div>
      <div className="HighLighedProjects">
        <h className="SectionHeader">Highlighted Projects</h>
      </div>
      <div className="Other Work">
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p>
        <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p>
        <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p>
        <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p>
        <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p>
        <p>loren</p> <p>loren</p> <p>loren</p> <p>loren</p>
      </div>
    </div>
  )
}

export default HomePage
