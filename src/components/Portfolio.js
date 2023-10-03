import React from 'react'
import Sophie from '../assets/images/Sophie-v2.PNG'
import Kasa from '../assets/images/Kasa-v2.PNG'
import Grimoire from '../assets/images/Grimoire-v2.PNG'
import { Link, NavLink } from 'react-router-dom'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="services-all">
        {/* First  */}
        <div className="portfolio-block">
          <img src={Sophie} alt="Portfolio" />
          <div className="porfolio-description">
            <h3>Portfolio</h3>
            <p>
              Récupération des données de l'API. Intégration des fonctionnalités
              de filtrage d'images. Page de connexion pour l'administrateur du
              site. Modalité d'upload et de supression de médias qui permet une
              mise à jour facile et rapide du portfolio.
              <br />
              <br />
              Javascript , CSS, Swagger UI
            </p>
            <a
              href="https://github.com/ClementMadiot/OC-Portfolio-Sophie-Bluel-P3"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Repo Github
            </a>
          </div>
        </div>
        {/* Second  */}
        <div className="portfolio-block">
          <img src={Kasa} alt="Kasa" />
          <div className="porfolio-description">
            <h3>Kasa</h3>
            <p>
              Kasa est une plateforme de location d'appartements. Avec React,
              j'ai créé les composants et les routes de l'application. J'ai
              implémenté une galerie de photos intuitive et des Collapses
              optimisés pour une navigation agréable.
              <br />
              <br />
              React, Sass, NodeJS
            </p>
            <a
              href="https://github.com/ClementMadiot/OC-Kasa-P6"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Repo Github
            </a>
          </div>
        </div>
        {/* Third  */}
        <div className="portfolio-block">
          <img src={Grimoire} alt="Grimoire" />
          <div className="porfolio-description">
            <h3>Mon vieux grimoire</h3>
            <p>
              Site de notation de livres, avec une authentification sécurisée,
              une gestion des livres et de l'optimisation des images upload. Les
              membres peuvent noter les livres et le site calcule une moyenne
              pour chaque ouvrage.
              <br />
              <br />
              React , Node.js , MongoDB
            </p>

            <a
              href="https://github.com/ClementMadiot/OC_Mon_Vieux_Grimoire_P7"
              target="_blank"
              rel="noopener noreferrer"
              class="button"
            >
              Repo Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
