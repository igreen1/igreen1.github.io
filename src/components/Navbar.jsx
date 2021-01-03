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
      <button onClick={() => toggle()} id="ExpandNavbar">
        <FaAlignRight />
      </button>
      <div className={expanded ? 'NavbarList show-nav' : 'NavbarList'}>
        {pageList.map((page) => {
          return (
            // <li key={page.name} className="NavbarListItem">
            <button className="InlineButton">
              <a
                className="InlineLink"
                href={page.link ? page.link : '/' + page.name}
              >
                {page.name}
              </a>
            </button>
            // </li>
          )
        })}
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
  {
    name: 'More',
    link: '#More',
  },
]

export default withRouter(Navbar)
