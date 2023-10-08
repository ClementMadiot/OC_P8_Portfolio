import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    const expressionReguliere =
      /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

    const result = document.getElementById('result')
    const mail = document.getElementById('email')
    console.log(process.env)
    emailjs.sendForm(
      'service_smreham',
      'template_ryw83wi',
      form.current,
      process.env.REACT_APP_ID
    )
    if (expressionReguliere.test(mail.value)) {
      result.innerHTML = '<p className="success">Message envoyé !</p>'
      result.style.background = 'rgb(139, 248, 139)'
      result.style.borderRadius = '15px'

      setTimeout(() => {
        result.innerHTML = ''
      }, 2000)

      form.current.reset()
    } else {
      result.innerHTML =
        "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>"
      result.style.background = 'rgb(246, 147, 147)'
      result.style.borderRadius = '15px'

      setTimeout(() => {
        result.innerHTML = ''
      }, 2000)
      form.current.reset()
    }
    return false
  }
  return (
    <section>
      <form ref={form} onSubmit={sendEmail}>
        <article className="userName">
          <div>
            <label>Nom</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Nom"
              id="name"
            />
          </div>
          <div>
            <label>Prénom</label>
            <input
              type="text"
              name="first-name"
              placeholder="Prénom"
              required
            />
          </div>
        </article>
        <article>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              id="email"
            />
          </div>
        </article>
        <article></article>
        <article>
          <div className="textarea">
            <label>Message</label>
            <textarea
              name="message"
              required
              placeholder="Votre message"
              id="mess"
            ></textarea>
          </div>
        </article>
        <input type="submit" className="button" value="Envoyer" />
      </form>
      <div id="result"></div>
    </section>
  )
}

export default ContactForm
