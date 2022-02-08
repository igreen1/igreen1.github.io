/*
Life is too short to take everything seriously
*/


import React from 'react'
import './FunHomepage.scss'
import '../assets/weather.css'
import useIntersectionObserver from '../hooks/userIntersectionObserver'
import Footer from '../components/Footer'

// assets
import PicOfMe from '../assets/me.png'
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
    <div key='FunHomepage' className={`FunHomepage ${weather !== '' ? `weather ${weather}` : ''}`}>
      <Landing />
      <PageLink id='About' />
      {/* <Spacer space='3' unit='vmin'/>  */}
      <About />
      <PageLink id='Projects' />
      <Projects />
      <PageLink id="Resume" />
      <ProfessionalExperience />
      <PageLink id='Contact' />
      <ContactMe style={{ marginBottom: '5vh' }} />

      <Footer setWeather={changeWeather} />
    </div>
  )

}


//Rather than pollute the source folders, below are the sections

const PageLink = ({ id }) => {
  console.log(id)
  return <div style={{ height: '10px' }} id={id}></div>
}

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
    <React.Fragment>
      <div id="Home" ref={ref} className={`Section Landing ${isVisible ? 'visible' : 'invisible'}`}>
        <h1 id="Name">Ian Green</h1>
        <p id="NameSubtitle">
          <strong>Full</strong>-stack developer
        </p>
      </div>
    </React.Fragment>
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

  const AboutMe = [
    `I'm Ian. I'm pursuing two degrees: a B.S. in Computer Science with a minor in Applied Mathematics
    and a B.S.E. in Electrical Engineering with a Computer Engineering emphasis with a minor in Pure Mathematics. I am in two on-campus research labs - the LMU Bioinformatics Lab and the LMU Cubesat Program.
    I also usually work multiple jobs on campus, holding simulataneous TA positions in the EE and Math departments as well as multiple tutoring positiosn`,
    `Beyond my majors and research, I actively participate in service opportunities. 
    As a member of an on-campus service org, Alpha Sigma Nu honor society, and Tau Beta Pi honor society, I perform upwards of 50 hours of service a semester. Even over COVID, I performed 40 hours of service per semester`,
    `In my freetime, I am usually found doing some outdoor activities - I love kayaking, hiking, and bouldering. My current goal is to visit every national park in the next ten years.`,
    `I am looking for post-grad opportunities (2022). While my abilities span the entire stack, I am mostly interested in 'low-level' programming eg., firmware.`

  ]


  return (
    <React.Fragment>
      <div ref={ref} className={`Section ${isVisible ? 'visible' : 'invisible'}`}>
        <h1 className='Title'>About</h1>
        <ul style={{ listStyleType: "none", display: "flex", padding: '0%' }}>
          <li>
            {AboutMe.map((paragraph) => <p style={{ marginRight: '3px' }} className='Text'>{paragraph}</p>)}
          </li>
          <img style={{ marginLeft: '3px' }} src={PicOfMe} className='InlineImage' alt='Image of myself on a hike' />
        </ul>
      </div>
    </React.Fragment>
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
    <React.Fragment>
      <div ref={ref} className={`Section ${isVisible ? 'visible' : 'invisible'}`}>
        <h1 className='Title'>Highlighted Projects</h1>
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
    </React.Fragment>
  )
}

const ProjectViewer = (params) => {

  return (
    <div className='Project'>
      <img src={params.image} className='Subsection HeaderImage' />
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
      <p className='Text'> {params?.description} </p>
    </div>
  )

}

const ProfessionalExperience = () => {
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

  const ProfessionalPositions = [
    {
      title: 'John Hopkins University - Applied Physics Laboratory',
      subtitle: 'Intern: Software Developer on the Testing and Evaluation Team',
      description: 'As an intern in the Air and Missile Defense Sector, Combat Systems Testing and Evaluation team, \
        I worked on improving and automating the workflow, working on data intake of large raw datsets. I worked in Pandas and propietary software. \
        I learned to work with large datasets, to integrate various softwares smoothly, and to use data analytic tools.',
      image: 'assets/vibah.jpg', //TODO: get the SEWIP logo ha
      // website: 'https://igreen1.github.io/Graphics/'
    },
    {
      title: 'Loyola Marymount University - Various Departments',
      subtitle: 'Teaching Assistant',
      description: "I have worked for various departments and various classes as a TA at LMU. \
        In the Math department, I worked with the Business Calculus class as well as the general Calculus I, II, and III classes as a TA. \
        In the EE department, I worked as a TA for Algorithms and Applications, a class teaching MATLAB. In these positions, \
        I've learned better communication when helping students, improved my skills in math and programming, and trained my scheduling abilities.",
      image: 'assets/vibah.jpg' //TODO
    }
    // {
    //    TODO: the work with HVAC company
    // }
  ]

  return (
    <React.Fragment>
      <div ref={ref} className={`Section ${isVisible ? 'visible' : 'invisible'}`}>
        <h1 className='Title'>Professional Experience</h1>
        {ProfessionalPositions.map((project) =>
          <ProjectViewer
            title={project?.title}
            subtitle={project?.subtitle}
            description={project?.description}
            image={project?.image}
            website={project?.website}
          />
        )}
      </div>
    </React.Fragment>
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
    <React.Fragment>
      <div ref={ref} className={`Section ${isVisible ? 'visible' : 'invisible'}`}>
        <h1 className='Title'>Contact</h1>
        <p>At some point, I may add a form here. For now, contact me via email!</p>
        <button className='OverlayButton'>
          <a className='InlineLink' style={{ fontSize: '70%' }} href='mailto:iangreen2.00@gmail.com'>iangreen2.00@gmail.com</a>
        </button>

      </div>
    </React.Fragment >
  )
}