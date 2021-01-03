import { React, useState } from 'react'
import { withRouter } from 'react-router-dom'
import './Navbar.css'

import { FaAlignRight } from 'react-icons/fa'
// import logo from './../images/sursumLogo.png'

function Navbar(props) {
  const [expanded, setExpanded] = useState(false)

  const toggle = () => {
    setExpanded(!expanded)
  }

  return (
    <div id="Header">
      <div id="Navbar">
        <button onClick={() => toggle()} id="ExpandNavbar">
          <FaAlignRight />
        </button>
        <ul className={expanded ? 'NavbarList show-nav' : 'NavbarList'}>
          {pageList.map((page) => {
            return (
              <li key={page.name} className="NavbarListItem">
                <a
                  className="InlineLink"
                  href={page.link ? page.link : '/' + page.name}
                >
                  {page.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const pageList = [
  {
    name: 'Home',
    link: '#Home',
  },
  {
    name: 'About',
    link: '#About',
  },
  {
    name: 'Projects',
    link: '#Projects',
  },
]

export default withRouter(Navbar)
