import React from 'react'
import { withRouter } from 'react-router-dom'

import { FaAlignRight } from 'react-icons/fa'
import Spacer from './Spacer'
import './Navbar.scss'

const Navbar = (props) => {

  const [expanded, setExpanded] = React.useState(false)

  const toggle = () => {
    setExpanded(!expanded)
  }

  return (
    <>
    <header id="Navbar">
      <button onClick={() => toggle()} id='ExpandNavbarButton'><FaAlignRight /></button>
      <div className={expanded ? 'Navbarlist shownav' : 'Navbarlist'}>
        {pageList.map((page) => {
          return (
            <button key={page.name + "NarbarButton"} className='NavbarButton' onClick={(e) => {
              e.preventDefault();
              window.location.href = page.link
            }}>
              {page.name}
            </button>
          )
        })}
      </div>
    </header>
    <Spacer id='NavbarSpacer' space='50' unit='px'/>
    </>
  )
}

const pageList = [
  {
    name: 'Home',
    link: '/',
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
    name: 'Professional',
    link: '#Resume'
  },
  {
    name: 'Contact',
    link: '#Contact',
  },
]

export default withRouter(Navbar)