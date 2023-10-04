import React from 'react';
import {  NavLink } from 'react-router-dom'

const NavBarAbout = () => {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <NavLink to="/" href="#accueil">
            accueil
          </NavLink>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarAbout;