import React from 'react'
import './About.css'

import useIntersectionObserver from '../../hooks/use-intersection-observer'

function About() {
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
    <div ref={ref} className="Section About">
      {isVisible && (
        <div className={isVisible ? 'visible' : ''}>
          <h1 className={'SectionHeader'}>About</h1>
          <ul id="AboutIntro">
            <li id="AboutText">
              <p className="SectionText">
                Hi, I'm Ian - a Electrical Engineering and Computer Science
                major at Loyola Marymount University in LA. I am looking for
                post-grad opportunities anywhere in the world
              </p>
              <br />
              <p className="SectionText">
                I am interested in hardware/software interfacing and primarily
                look to work in systems-level software engineering. I excel in
                utilizing my in-depth knowledge of computers to optimize
                programs. However, I am also skilled in the whole stack: from
                hardware to frontend.
              </p>
            </li>
            <li id="AboutPic">
              <img
                id="PicOfMe"
                // src="https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png"
                src={`https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`}
                alt="Placeholder"
              />
            </li>
          </ul>
          <div className="Subsection" id="Skills">
            {/* todo */}
          </div>
        </div>
      )}
    </div>
  )
}

export default About
