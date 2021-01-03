import React from 'react'
import './HomePage.css'

import Landing from './homepage/Landing'
import About from './homepage/About'
import Projects from './homepage/Projects'
import Spacer from '../components/Spacer'
import Overlay from '../components/Overlay'
import Misc from './homepage/Misc'

const HomePage = () => {
  return (
    <div className="HomePage">
      <Landing />
      <Spacer id="About" space="5" unit="vh" />
      <About />
      <Spacer id="Projects" space="5" unit="vh" />
      <Projects />
      <Spacer id="More" space="5" unit="vh" />
      <Misc />
      <Overlay />
    </div>
  )
}

export default HomePage
