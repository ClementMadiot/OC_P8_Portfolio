import React, { useRef } from 'react'
import { init } from '@emailjs/browser'
import emailjs from '@emailjs/browser'
init(process.env.ID)

const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    const formMess = document.querySelector('.formMessage')

    emailjs
      .sendForm(
        'service_smreham',
        'template_ryw83wi',
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (res) => {
          console.log(res.text)
          form.current.reset()
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>"

          setTimeout(() => {
            formMess.innerHTML = ''
          }, 2000)
        },
        (err) => {
          console.log(err.text)
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>"

          setTimeout(() => {
            formMess.innerHTML = ''
          }, 2000)
        }
      )
  }
  return (
    <section>
      <form ref={form} onSubmit={sendEmail}>
        <article className="userName">
          <div>
            <label>Nom</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Nom"
              id="name"
            />
          </div>
          <div>
            <label>Prénom</label>
            <input type="text" name="user_firstName" placeholder="Prénom" />
          </div>
        </article>
        <article>
          <div>
            <label>E-mail</label>
            <input
              type="text"
              name="user_email"
              required
              placeholder="E-mail"
              id="email"
            />
          </div>
        </article>
        <article>
          <div>
            <label>Sujet</label>
            <input type="text" name="sujet" placeholder="Sujet" id="subjet" />
          </div>
        </article>
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
      <div className="formMessage"></div>
    </section>
  )
}

export default ContactForm
