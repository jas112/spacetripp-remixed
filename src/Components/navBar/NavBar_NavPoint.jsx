import React from 'react'
import './styles/NavBar_NavPoint.css'
import '../mainContent/styles/Animations.css'

const NavBar_NavPoint = ({targetSection}) => {
  return (
    <div id={`${targetSection}-navpoint-frame`} className="nav-bar-nav-point-frame">
        <div id={`${targetSection}-navpoint`} className='nav-bar-nav-point-link'>
            <span className="nav-bar-nav-point">
                    <span className="nav-bar-nav-point-element"></span>
            </span>
        </div>
    </div>
  )
}

export default NavBar_NavPoint