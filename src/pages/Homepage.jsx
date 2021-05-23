import React from 'react'
import './Homepage.scss'
import '../assets/weather.css'
import useIntersectionObserver from '../hooks/userIntersectionObserver'
import Footer from '../components/Footer'

// assets
import PicOfMe from '../assets/placeholder.jpg'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Homepage(props) {

  const [weather, setWeather] = React.useState('')

  const changeWeather = (newWeather) => {

    if (newWeather === weather) {
      setWeather('')
    }
    else {
      setWeather(newWeather)
    }
  }

  return (
    <div key='Homepage' className={`${weather !== '' ? `weather ${weather}` : ''}`}>
      <Landing />
      {/* <Spacer space='3' unit='vmin'/>  */}
      <About />
      <Projects />
      <ContactMe style={{ marginBottom: '5vh' }} />
      <Footer setWeather={changeWeather} />
    </div>
  )

}


//Rather than pollute the source folders, below are the sections

const Landing = () => {
  const ref = React.useRef()
  const [isVisible, setIsVisible] = React.useState(false)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true)
        observerElement.unobserve(ref.current)
      }
    },
  })
  return (
    <div className='Section Landing'>
      <div id="Home" ref={ref} className={isVisible ? 'visible' : 'invisible'}>
        <h1 id="Name">Ian Green</h1>
        <p id="NameSubtitle">
          <strong>Full</strong>-stack developer
        </p>
      </div>
    </div>
  )
}

const About = () => {
  const ref = React.useRef()
  const [isVisible, setIsVisible] = React.useState(false)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true)
        observerElement.unobserve(ref.current)
      }
    },
  })
  return (
    <div className='Section'>
      <div id="About" ref={ref} className={isVisible ? 'visible' : 'invisible'}>
        <h1 className='Title'>About</h1>
        <ul style={{ listStyleType: "none", display: "flex", padding: '0%' }}>
          <li>
            <p style={{ marginRight: '3px' }} className='Text'>I'm Ian, a college student pursueing a B.S. in Computer Science and a B.S.E. in Electrical Engineering with a computer engineering emphasis from Loyola Marymount University in LA. I'm looking for post-grad opportunities anywhere in the world.</p>
            <p style={{ marginRight: '3px' }} className='Text'>I am interested in software-hardware interfacing, data science, and microprocessor design, but I excel in any field - from electronics to theory of computation</p>
          </li>
          <img style={{ marginLeft: '3px' }} src={PicOfMe} className='InlineImage' alt='Image of myself on a hike' />
        </ul>
      </div>
    </div>
  )
}

const Projects = () => {
  const ref = React.useRef()
  const [isVisible, setIsVisible] = React.useState(false)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true)
        observerElement.unobserve(ref.current)
      }
    },
  })

  const ProjectList = [
    {
      title: 'VIBAH Graphics Library',
      subtitle: 'A graphics library built on top of WebGL using ReactJS',
      description: 'VIBAH (the group initials) is a graphics library mirroring ThreeJS. It is built on top of WebGL and implements meshes, objects, grouping, animations, shading, and vertex coloring. To view the project, follow the link to its Github Pages website, but note that the pages often load very slowly due to calculations of normals.',
      image: 'assets/vibah.jpg',
      github: 'https://github.com/igreen1/Graphics',
      website: 'https://igreen1.github.io/Graphics/'
    },
    {
      title: "'Custom' Programming Language",
      subtitle: 'A C-like language we built',
      description: "Custom is built upon the idea of replaceable keywords. All keywords come from a configuration file. We built it to allow us to emulate any other language we wanted in our class - though, it is primarily built on a C-like philosophy.",
      image: 'assets/custom.png',
      github: 'https://github.com/igreen1/Custom',
      website: 'https://igreen1.github.io/Custom',
    },
    {
      title: 'GRNSight',
      subtitle: 'Graph visualization tool for gene regulatory networks',
      description: 'This tool shows the suppression/activation networks of gene regulatory networks. I work on the visualization and testing framework, with an emphasis in fixing d3.js issues',
      image: 'assets/GRNSight.png',
      github: 'https://github.com/dondi/GRNsight',
      website: 'https://dondi.github.io/GRNsight/',
    },
    // {
    //   title: 'Automata Simulator',
    //   description: 'TODO',
    //   image: 'Automata.png'
    // },
  ]

  return (
    <div className='Section'>
      <div id="Projects" ref={ref} className={isVisible ? 'visible' : 'invisible'}>
        <h1 className='Title'>Projects</h1>
        {ProjectList.map((project) =>
          <ProjectViewer
            title={project?.title}
            subtitle={project?.subtitle}
            description={project?.description}
            image={project?.image}
            github={project?.github}
            website={project?.website}
          />
        )}
      </div>
    </div>
  )
}

const ProjectViewer = (params) => {

  return (
    <div className='Subsection Project'>
      <img src={params.image} className='HeaderImage' />
      <h2>{params.title}</h2>
      <h3 className='Subtitle'>{params.subtitle}</h3>
      <div className='Links'>
        {params.github && (
          <a href={params.github}>
            <FiGithub />
          </a>
        )}
        {params.website && (
          <a href={params.website}>
            <FiExternalLink />
          </a>
        )}
      </div>
      <p> {params?.description} </p>
    </div>
  )

}

const ContactMe = () => {
  const ref = React.useRef()
  const [isVisible, setIsVisible] = React.useState(false)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true)
        observerElement.unobserve(ref.current)
      }
    },
  })
  return (
    <div className='Section'>
      <div id="Contact" ref={ref} className={isVisible ? 'visible' : 'invisible'}>
        <h1 className='Title'>Contact</h1>
        <p>At some point, I may add a form here. For now, contact me via email!</p>
        <a className='InlineLink' href='mailto:iangreen2.00@gmail.com'>iangreen2.00@gmail.com</a>
      </div>
    </div>
  )
}