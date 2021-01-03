import React from 'react'
import './Footer.css'

import { FiCloudSnow, FiCloudRain } from 'react-icons/fi'
import { GiPartyPopper } from 'react-icons/gi'
import { SiRetroarch } from 'react-icons/si'

function Footer({ setWeather, toggleRave, toggleRetro }) {
  return (
    <div>
      <div className="FooterButtons">
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
