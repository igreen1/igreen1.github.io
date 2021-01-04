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
      <Spacer id="About" space="50" unit="px" />
      <About />
      <Spacer id="Projects" space="50" unit="px" />
      <Projects />
      <Spacer id="More" space="20" unit="px" />
      <Misc />
      <Overlay />
      <Spacer id="More" space="20" unit="px" />
    </div>
  )
}

export default HomePage
