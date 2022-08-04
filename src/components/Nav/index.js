import React from 'react'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function Nav(props) {
  return (
    <>
    <nav id='navbar'>
    <div className='buttons'>
        <Button
        color="warning"
        outline
        onClick={() => props.setCurrentPage(0)}>About</Button>
        <Button
        color="warning"
        outline
         onClick={() => props.setCurrentPage(1)}>Contact</Button>
        <Button 
        color="warning"
        outline
        onClick={() => props.setCurrentPage(2)}>Portfolio</Button>
        <Button 
        color="warning"
        outline
        onClick={() => props.setCurrentPage(3)}>Resume</Button>
        </div>
    </nav>
    </>
  )
}

export default Nav

