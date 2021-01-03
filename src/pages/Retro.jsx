import React from 'react'
import './Retro.css'

export default function Retro({ toggleRetro }) {
  return (
    <div className="RetroSite">
      <div className="RetroFirstline">
        <h1 style={{ paddingTop: '20px' }} className="RetroHeader1">
          Hi, my name is
        </h1>
        <h1 className="RetroName">IAN GREEN</h1>
      </div>
      <h2 className="RetroHeader2">And this is my website</h2>
      <p className="RetroParagraph">
        I code lots. I code websites (like this rad one) and even low-level
        things like Assembly
      </p>
      <p className="RetroParagraph">
        Checkout my github: <a href="https://github.com/igreen1">HERE</a>
      </p>
      <p className="RetroParagraph">
        Checkout my Linkedin:{' '}
        <a href="https://www.linkedin.com/in/ian-green2/">HERE</a>
      </p>
      <p className="RetroParagraph">
        I am a Computer Science and Electrical Engineering Double major. I can
        program the entire stack, from transistors up to front-end development
        (like this)
      </p>
      <p className="RetroParagraph">
        And, I'd keep writing, but frankly, this portion hurts my eyes
      </p>
      <p className="RetroParagraph">
        I really only put it in as a joke, go look at my main site, its cooler
      </p>
      <button
        onClick={() => {
          toggleRetro()
        }}
      >
        CLICK ME TO GO BACK
      </button>
    </div>
  )
}
