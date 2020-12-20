import React from 'react'
import { useState } from 'react'
import './NavBar.css'
import '../styleConstants.css'
import { withRouter } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa'

function NavBar({ location }) {
  const [expanded, setExpanded] = useState(false)

  const toggle = () => {
    setExpanded(!expanded)
  }

  const { pathname } = location
  return (
    <div className="navBar">
      <button onClick={() => toggle()}>
        <FaAlignRight />
      </button>
      <ul className={expanded ? 'show-nav' : 'nav-links'}>
        <li>
          <a className="boldText" href="#Home">
            Home
          </a>
        </li>
        <li>
          <a className="boldText" href="/#About">
            About
          </a>
        </li>
        <li>
          <a className="boldText" href="/#Projects">
            Projects
          </a>
        </li>
      </ul>
    </div>
  )
}
export default withRouter(NavBar)
