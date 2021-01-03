import React from 'react'
import './HomePage.css'

import { FiGithub, FiExternalLink } from 'react-icons/fi'

import Landing from './homepage/Landing'
import About from './homepage/About'
import Projects from './homepage/Projects'
import Spacer from '../components/Spacer'

const HomePage = () => {
  return (
    <div className="HomePage">
      <Landing />
      <Spacer id="About" space="5" unit="vh" />
      <About />
      <Spacer id="Projects" space="5" unit="vh" />
      <Projects />
    </div>
  )
}

export default HomePage
