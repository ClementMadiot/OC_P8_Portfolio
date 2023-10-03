import React from 'react'
import {  NavLink } from 'react-router-dom'



const NavBar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <NavLink to="/" href="#accueil">
            accueil
          </NavLink>
          {/* <a href="#accueil"></a> */}
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
