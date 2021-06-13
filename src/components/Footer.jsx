import React from 'react'
import './Footer.scss'

import { FiCloudSnow, FiCloudRain } from 'react-icons/fi'
import { GiPartyPopper } from 'react-icons/gi'
import { SiRetroarch } from 'react-icons/si'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Footer({ setWeather }) {
  return (
    <React.Fragment>
      <div
        style={{
          borderBottom: '1px solid white',
          marginBottom: '20px',
          width: '200px',
          margin: 'auto'
        }}
        className="FooterLinks">
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
      {/*
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
        </button> */}
    </React.Fragment>
  )
}
export default Footer