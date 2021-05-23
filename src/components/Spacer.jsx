import React from 'react'

export default function Spacer({ space, unit, id }) {
  return <div id={id ? id : ''} style={{ margin:'0', height: space + unit }} />
}