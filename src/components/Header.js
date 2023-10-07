import React from 'react'
import Worker from '../assets/images/man-works.avif'


const Header = () => {
  return (
    <header id="accueil">
      <div className="headerSection">
        <div className="img-accueil">
          <img src={Worker} alt="man-works" />
        </div>
        <div className="container">
          <div>
            <h1>
              Bonjour !
              <br />Je suis Clément Madiot
            </h1>
            <p>Développeur Web</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
