import React from 'react';
import Gmail from "../assets/images/icons8-gmail-96.png"
import Whatsap from "../assets/images/icons8-whatsapp-96.png" 

const Contact = () => {
  return (
    <section id="contact">
      <h2>Me contacter</h2>
      <div className="contact-info">
        <div className="contact-mail">
          <a href="mailto:clementmadiot09@gmail.com">
            <img src={Gmail} alt="mail" />
            <p>clementmadiot09@gmail.com</p>
          </a>
        </div>
        <div id="phone" className="contact-phone">
          <a href="tel:+33648501383">
            <img src={Whatsap} alt="Whatsap" />
            <p className="phone-number">+33 648 501 383</p>
          </a>
        </div>
      </div>

      <form method="post" action="#">
            <div className="form-grid">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>
                <div className="textarea">
                    <label htmlFor="message">Message</label>
                    <textarea id="message"></textarea>
                </div>
            </div>
            <input href="#" type="button" className="button" value="Send Message" />
        </form>
    </section>
  );
};

export default Contact;