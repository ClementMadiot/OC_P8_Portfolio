import React from 'react'

const AboutMe = () => {
  return (
    <section id="about">
      <article>
        <div className="title-span">
          <h2>présentation</h2>
          <span className="back-span">qui suis-je ?</span>
        </div>
        <div className="description">
          <p>
            <strong>Développeur passionné</strong>, je suis un professionnel
            bilingue qui a récemment embrassé une nouvelle carrière en tant que{' '}
            <strong>développeur frontend et backend. </strong>
            <br />
            Mon parcours de reconversion m'a permis d'acquérir une expertise
            solide dans{' '}
            <strong>
              la création d'applications web modernes et performantes.
            </strong>
            <br />
            Explorez mon portfolio pour découvrir mes dernier projets.
            <br />
            <br />
          </p>
            <div>
            </div>
            <p className='lien-about'>Vous souhaitez avoir mon CV au format PDF c'est par <strong><a href="#accueil">ici</a></strong></p>
        </div>

      </article>
    </section>
  )
}

export default AboutMe
