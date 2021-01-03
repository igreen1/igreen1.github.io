import React from 'react'
import './Landing.css'

import useIntersectionObserver from '../../hooks/use-intersection-observer'

function Landing() {
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
    <div ref={ref} id="Home" className="Section landing">
      <div className={isVisible ? 'TextContainer visible' : 'TextContainer'}>
        <p id="NameIntro">Hi, I'm</p>
        <h1 id="Name">Ian Green</h1>
        <p id="NameSubtitle">
          <strong>Full</strong>-stack developer
        </p>
      </div>
    </div>
  )
}

export default Landing
