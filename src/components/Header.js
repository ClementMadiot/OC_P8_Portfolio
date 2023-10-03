import React from 'react'
import Worker from "../assets/images/man-works.avif";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id="accueil">
      <div class="img-accueil">
        <img src={Worker} alt="man-works" />
      </div>
      <div class="container">
					<div>
						<h1>Hi ! 
								<br/>
								I am Clément Madiot
							</h1>
							<p>Frontend Web Developper</p>
							<NavLink to="/about" className="button">learn more about me</NavLink>
							{/* <a href="../components/aboutMe.html" class="button">learn more about me</a> */}
						</div>
					</div>
    </header>
  )
}

export default Header
