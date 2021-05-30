import React from 'react'

function Card(props) {
  return (
    <div {...props} className={`card ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card
