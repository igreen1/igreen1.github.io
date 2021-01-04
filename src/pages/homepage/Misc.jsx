import React from 'react'
import './Misc.css'

import useIntersectionObserver from '../../hooks/use-intersection-observer'
import VerticalProjectContainer from '../../components/VerticalProjectContainer'

export default function Misc() {
  //Load when in view
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

  const moreList = require('../../data/more.json')
  let i = 0

  return (
    <div className="Section" ref={ref}>
      <div className={isVisible ? 'visible' : ''}>
        <h1
          style={{
            fontSize: '40px',
          }}
        >
          More
        </h1>
        <p className="SectionText" style={{ textAlign: 'center' }}>
          It's difficult to summarize myself in just one page of a website. So
          look at some more information about me to get a better picture
        </p>
        <div style={{ display: 'grid' }}>
          {moreList.more.map((item) => {
            i++
            return (
              <div style={{ gridColumn: i - 2 > 0 ? i - 2 : i }}>
                <VerticalProjectContainer
                  name={item.name}
                  description={item.description}
                  // image={item.image ? '/images/' + item.image : undefined}
                  // imageLink={item?.imageLink}
                  link={item.link}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
