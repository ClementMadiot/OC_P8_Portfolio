import React from 'react'
import { projet } from '../data/projet'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="title-span">
        <h2>Mes Projets</h2>
        <span className='back-span'>Portfolio</span>
      </div>
      <div className="services-all">

      {projet.map(({ id, title, cover, description, language, lien })=> (
        <div key={id} className="portfolio-block">
          <img src={cover} alt={`Projet ${title}`} />
          <div className="porfolio-description">
            <h3>{title}</h3>
            <p>
            {description}
              <br />
              <br />
              {language}
            </p>
            <a
              href={lien}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Repo Github
            </a>
          </div>
        </div>

      ))}
        
      </div>
    </section>
  )
}
export default Portfolio
