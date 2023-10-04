import React from 'react'
import Gmail from '../assets/images/icons8-gmail-96.png'
import Whatsap from '../assets/images/icons8-whatsapp-96.png'

const Contact = () => {
  return (
    <section id="contact">
      <section className='sectionContact'>
      <h2>Me contacter</h2>
      <div>
      <h3>N'hésitez pas à me contacter via ce formulaire, ou directement par mail</h3>
      </div>
      </section>

      <section className="sectionForm">
        <article className="contact-info">
          <div className="contact-mail">
            <a href="mailto:clementmadiot09@gmail.com">
              <img src={Gmail} alt="mail" />
              <p>clementmadiot09@gmail.com</p>
            </a>
          </div>
          <div className="contact-phone">
            <a href="tel:+33648501383">
              <img src={Whatsap} alt="Whatsap" />
              <p className="phone-number">+33 648 501 383</p>
            </a>
          </div>
        </article>

        <form method="post" action="#">
          <article className='userName'>
            <div>
              <label htmlFor="lastName">Nom</label>
              <input type="text" id="lastName" placeholder="Nom" />
            </div>
            <div>
              <label htmlFor="firstName">Prénom</label>
              <input type="text" id="firstName" placeholder="Prénom" />
            </div>
          </article>
          <article>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" placeholder="E-mail" />
            </div>
          </article>
          <article>
            <div>
              <label htmlFor="sujet">Sujet</label>
              <input type="text" id="sujet" placeholder="Sujet" />
            </div>
          </article>
          <article>
            <div className="textarea">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Votre message"></textarea>
            </div>
          </article>
          <input
            href="#"
            type="button"
            className="button"
            value="Send Message"
          />
        </form>
      </section>
    </section>
  )
}

export default Contact
