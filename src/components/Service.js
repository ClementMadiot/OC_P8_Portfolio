import React from 'react'
import Frontend from '../assets/images/front-end.jpg'
import Backend from '../assets/images/back-end.jpg'
import Optimiser from '../assets/images/optimiser.jpg'
import { NavLink } from 'react-router-dom';

const Service = () => {
  return (
    <section id="services">
      <h2>Services</h2>

      <section className="services-card">
        <article className="services-article">
          <div className="article-wrapper">
            <figure>
              <img src={Frontend} alt="front-end" />
            </figure>
            <div className="services-description">
              <h3>Front-end</h3>
              <p>
                Intégration des éléments visuels d'un site ; création d'une
                interface lisible et facilement navigable.
              </p>
            </div>
          </div>
        </article>

        <article className="services-article">
          <div className="article-wrapper">
            <figure>
              <img src={Backend} alt="back-end" />
            </figure>
            <div className="services-description">
              <h3>Back-end</h3>
              <p>
                Conception d'API RESTful à l'aide de Node.js, de son framework
                Express, et de la base de données MongoDB.
              </p>
            </div>
          </div>
        </article>

        <article className="services-article">
          <div className="article-wrapper">
            <figure>
              <img src={Optimiser} alt="optimiser" />
            </figure>
            <div className="services-description">
              <h3>Entretien et Optimisation</h3>
              <p>
                Optimisez la performance, le SEO de votre site web et éliminez
                les problèmes gênants.
              </p>
            </div>
          </div>
        </article>
      </section>
    </section>
  )
}

export default Service
