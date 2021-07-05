import React, { useState } from 'react'
import './Homepage.scss'
import '../assets/weather.css'
import useIntersectionObserver from '../hooks/userIntersectionObserver'
import Footer from '../components/Footer'

// assets
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HighlightedProjects, BackendProjects, ComputerScienceProjects, ComputerEngineering, ElectricalEngineering, DataScienceProjects, FrontendProjects } from './ProjectList'

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
      <PageLink id='About' />
      {/* <Spacer space='3' unit='vmin'/>  */}
      <About />
      <PageLink id='Projects' />
      <Projects />
      {/* <PageLink id="Resume" />
      <Resume /> */}
      {/* <ProfessionalExperience /> */}

      <PageLink id='Contact' />
      <ContactMe style={{ marginBottom: '5vh' }} />

      <Footer setWeather={changeWeather} />
    </div>
  )

}


//Rather than pollute the source folders, below are the sections

const PageLink = ({ id }) => {
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
    and a B.S.E. in Electrical Engineering with a Computer Engineering emphasis with a minor in Pure Mathematics.`,
    `Beyond my majors and research, I strive to incorporate service into my life.
    Through an on-campus service org, Alpha Sigma Nu honor society, and Tau Beta Pi honor society, I perform upwards of 50 hours of service a semester.`,
    `In my freetime, I am usually found doing some outdoor activities - I love kayaking, hiking, and bouldering. My current goal is to visit every national park in the next ten years.`,

  ]



  return (
    <React.Fragment>
      <div ref={ref} className={`Section ${isVisible ? 'visible' : 'invisible'}`}>
        <h1 className='Title'>About</h1>
        <ul style={{ listStyleType: "none", display: "flex", padding: '0%' }}>
          <li>
            {AboutMe.map((paragraph) => <p style={{ marginRight: '3px' }} className='Text'>{paragraph}</p>)}
          </li>
          <div className='InlineImage'>
            <img style={{ marginLeft: '3px' }} src={'assets/me.png'} alt='Image of myself on a hike from Marcella Maggio' />
            <p>Art by <a className='InlineLink' style={{textDecoration:'underline'}} href='mailto:mmaggio@lion.lmu.edu'>Marcella Maggio</a></p>
          </div>

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



  const [currentProject, setCurrentProject] = React.useState(HighlightedProjects)
  const [showStack, setShowStack] = React.useState()

  const projectCategoryButton = (project) => {
    return <button className='FlatButton' onClick={() => setCurrentProject(project)}>{project.name}</button>
  }
  const buttonList = [HighlightedProjects, FrontendProjects, DataScienceProjects, BackendProjects, ComputerScienceProjects, ComputerEngineering, ElectricalEngineering,].map((proj) => projectCategoryButton(proj))



  return (
    <React.Fragment>
      <div ref={ref} className={`Section ${isVisible ? 'visible' : 'invisible'}`}>
        {buttonList}
        <h1 className='Title'>{currentProject.name}</h1>
        {currentProject.projects.map((project) =>
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

    </React.Fragment >
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

// const ProfessionalExperience = () => {
//   const ref = React.useRef()
//   const [isVisible, setIsVisible] = React.useState(false)

//   useIntersectionObserver({
//     target: ref,
//     onIntersect: ([{ isIntersecting }], observerElement) => {
//       if (isIntersecting) {
//         setIsVisible(true)
//         observerElement.unobserve(ref.current)
//       }
//     },
//   })

//   const ProfessionalPositions = [
//     {
//       title: 'John Hopkins University - Applied Physics Laboratory',
//       subtitle: 'Intern: Software Developer for Testing and Evaluation',
//       description: 'As an intern in the Air and Missile Defense Sector, Combat Systems Testing and Evaluation team, \
//         I worked on improving and automating the workflow, improving data intake of large raw datsets. I programmed in Pandas and propietary software. \
//         I learned to work on large datasets, to integrate various softwares smoothly, and to use data analytic tools.',
//       image: 'assets/sew.png', //TODO: get the SEWIP logo ha
//       website: 'https://www.jhuapl.edu/OurWork/AirandMissileDefense',
//     },
//     {
//       title: 'Loyola Marymount University - Various Departments',
//       subtitle: 'Teaching Assistant',
//       description: "I have worked for various departments and various classes as a TA at LMU. \
//         In the Math department, I worked with the Business Calculus class as well as the general Calculus I, II, and III classes as a TA. \
//         In the EE department, I worked as a TA for Algorithms and Applications, a class teaching MATLAB. In these positions, \
//         I've learned better communication when helping students, improved my skills in math and programming, and trained my scheduling abilities.",
//       image: 'assets/lmu.png' //TODO
//     }
//     // {
//     //    TODO: the work with HVAC company
//     // }
//   ]

//   return (
//     <React.Fragment>
//       <div ref={ref} className={`Section ${isVisible ? 'visible' : 'invisible'}`}>
//         <h1 className='Title'>Professional Experience</h1>
//         {ProfessionalPositions.map((project) =>
//           <ProjectViewer
//             title={project?.title}
//             subtitle={project?.subtitle}
//             description={project?.description}
//             image={project?.image}
//             website={project?.website}
//           />
//         )}
//       </div>
//     </React.Fragment>
//   )
// }

const Resume = () => {
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
        <h1 className='Title'>Resume</h1>
        <iframe src='assets/resume.pdf' height='500px' width='100%'></iframe>
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
          <a className='InlineLink' style={{ fontSize: '70%' }} href='mailto:me@iangreen.space'>me@iangreen.space</a>
        </button>

      </div>
    </React.Fragment >
  )
}