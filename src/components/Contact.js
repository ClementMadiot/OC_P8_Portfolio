import React from 'react'
import Gmail from '../assets/images/icons8-gmail-96.png'
import Whatsap from '../assets/images/icons8-whatsapp-96.png'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact">
      <section className="sectionContact">
        <h2>Me contacter</h2>
        <div>
          <h3>
            N'hésitez pas à me contacter via ce formulaire, ou directement par
            mail
          </h3>
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
        <ContactForm /> 
      </section>
    </section>
  )
}

export default Contact
