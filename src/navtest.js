import React from 'react'

function Nav(props) {
  return (
    <div>
        <button onClick={() => props.setCurrentPage(0)}>About</button>
        <button onClick={() => props.setCurrentPage(1)}>Contact</button>
        <button onClick={() => props.setCurrentPage(2)}>Portfolio</button>
        <button onClick={() => props.setCurrentPage(3)}>Resume</button>
    </div>
  )
}

export default Nav