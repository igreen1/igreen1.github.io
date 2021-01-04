import React from 'react'
import './Footer.css'

import { FiCloudSnow, FiCloudRain } from 'react-icons/fi'
import { GiPartyPopper } from 'react-icons/gi'
import { SiRetroarch } from 'react-icons/si'
// import { RiLightbulbFlashLine } from 'react-icons/ri'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Footer({ setWeather, toggleRave, toggleRetro, toggleColor }) {
  return (
    <div>
      <div className="FooterLinks">
        <button className="FooterButton">
          <a href={'https://github.com/igreen1'} className="InlineLink">
            <FaGithub />
          </a>
        </button>
        <button className="FooterButton">
          <a
            href={'https://www.linkedin.com/in/ian-green2/'}
            className="InlineLink"
          >
            <FaLinkedinIn />
          </a>
        </button>
      </div>
      <div
        style={{
          borderBottom: '1px solid black',
          marginBottom: '20px',
          width: '200px',
          margin: 'auto',
        }}
      ></div>
      <div className="FooterButtons">
        <p>Designed and built (from scratch) by Ian Green</p>
        <button
          className="FooterButton"
          onClick={() => {
            setWeather('snow')
          }}
        >
          <FiCloudSnow />
        </button>
        <button
          className="FooterButton"
          onClick={() => {
            setWeather('rain')
          }}
        >
          <FiCloudRain />
        </button>
        <button
          className="FooterButton"
          onClick={() => {
            toggleRave()
          }}
        >
          <GiPartyPopper />
        </button>
        <button
          className="FooterButton"
          onClick={() => {
            toggleRetro()
          }}
        >
          <SiRetroarch />
        </button>
      </div>
    </div>
  )
}
export default Footer
