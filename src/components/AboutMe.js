import React from 'react'
import Worker from '../assets/images/man-works.avif'
const AboutMe = () => {
  return (
    <header id="about">
      <div className="img-accueil">
        <img src={Worker} alt="man-works" />
      </div>
      <div className="container">
        <div>
          <h1>About Me</h1>
          <p>
            Développeur web, je suis un professionnel bilingue qui a récemment
            embrassé une nouvelle carrière en tant que développeur frontend et
            backend. Mon parcours de reconversion m'a permis d'acquérir une
            expertise solide dans la création d'applications web modernes et
            performantes. Explorez mon portfolio pour découvrir mes dernier
            projets.
          </p>
        </div>
      </div>
    </header>
  )
}

export default AboutMe
