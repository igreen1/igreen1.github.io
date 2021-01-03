import React from 'react'

export default function Spacer({ space, unit, id }) {
  return <div id={id ? id : ''} style={{ padding: space + unit }} />
}
