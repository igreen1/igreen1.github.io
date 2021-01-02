import React from 'react'
import './HomePage.css'

import Landing from './homepage/Landing'
import About from './homepage/About'
import Projects from './homepage/Projects'
import Spacer from '../components/Spacer'

const HomePage = () => {
  return (
    <div className="HomePage">
      <Landing />
      <Spacer space="2" unit="vh" />
      <About />
      <Projects />
    </div>
  )
}

export default HomePage
