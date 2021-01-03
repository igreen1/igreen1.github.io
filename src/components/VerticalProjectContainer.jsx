import React from 'react'
import './VerticalProjectContainer.css'

// import logo from './../assets/images/sursumlogo.png'

export default function VerticalProjectContainer({
  image,
  imageLink,
  name,
  description,
  link,
}) {
  const imgSrc = image ? image : imageLink
  return (
    <a className="VerticalProject InlineLink" href={link}>
      <div>
        <img className="VerticalProjectImage" src={imgSrc} />
      </div>
      <div>
        <h2 className="VerticalProjectName">{name}</h2>
      </div>
      <div>
        <p className="VerticalProjectText">{description}</p>
      </div>
    </a>
  )
}
