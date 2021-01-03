import React from 'react'
import './Footer.css'

import { FiCloudSnow, FiCloudRain } from 'react-icons/fi'
import { GiPartyPopper } from 'react-icons/gi'
import { SiRetroarch } from 'react-icons/si'
import { RiLightbulbFlashLine } from 'react-icons/ri'

function Footer({ setWeather, toggleRave, toggleRetro, toggleColor }) {
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
