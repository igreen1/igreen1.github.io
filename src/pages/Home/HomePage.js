import React from 'react'
import './HomePage.css'

import Landing from './subpages/Landing'
import About from './subpages/About'
import Projects from './subpages/Projects'

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="Spacer"></div>
      <Landing />

      <About />

      <Projects />
    </div>
  )
}

export default HomePage
