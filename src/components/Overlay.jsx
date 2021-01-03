import React from 'react'
import './Overlay.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
export default function Overlay() {
  return (
    <div>
      <div className="LeftBar">
        <li>
          <button className="OverlayButton">
            <a href={'https://github.com/igreen1'} className="InlineLink">
              <FaGithub />
            </a>
          </button>
        </li>
        <li>
          <button className="OverlayButton">
            <a
              href={'https://www.linkedin.com/in/ian-green2/'}
              className="InlineLink"
            >
              <FaLinkedinIn />
            </a>
          </button>
        </li>
        <li className="VerticalLine" />
      </div>
      <div className="RightBar">
        <li>
          <a href="mailto:iangreen2.00@gmail.com" className="Email InlineLink">
            iangreen2.00@gmail.com
          </a>
        </li>
        <li className="VerticalLine" style={{ width: '8px' }} />
      </div>
    </div>
  )
}
