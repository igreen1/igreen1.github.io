import React from 'react'

import useIntersectionObserver from '../../hooks/use-intersection-observer'

export default function Contact() {
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
    <div ref={ref} className="Section Contact">
      <div className={isVisible ? 'visible' : ''}>
        <h1 className="SectionHeaderCenter">Contact Me</h1>
        <br />
        <p className="SectionText" style={{ textAlign: 'Center' }}>
          I'm am always looking for new opportunties! Feel free to reach out :)
        </p>
        <br />
        <a href="mailto:iangreen2.00@gmail.com">
          <button className="FlatButton Color1">Say Hi</button>
        </a>
      </div>
    </div>
  )
}
