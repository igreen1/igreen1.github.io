import React from 'react'

import { FaAlignRight } from 'react-icons/fa'
import Spacer from './Spacer'
import './Navbar.scss'

const Navbar = (props) => {

  const [expanded, setExpanded] = React.useState(false)

  const toggle = () => {
    console.log('hello from button click')
    setExpanded(!expanded)
  }

  return (
    <>
    <header id="Navbar">
      <button onClick={() => toggle()} id='ExpandNavbarButton' className={expanded ? 'showbutton' : ''}><FaAlignRight/></button>
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
  // {
  //   name: 'Resume',
  //   link: '#Resume'
  // },
  {
    name: 'Contact',
    link: '#Contact',
  },
]

export default Navbar