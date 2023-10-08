import React from 'react'
import NavSideBar from './NavSideBar'

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavSideBar/>
      <ul className='nav-desktop'>
        <li>
          <a href="#accueil">accueil</a>
        </li>
        <li>
          <a href="#about">présentation</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#skills">compétences</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
