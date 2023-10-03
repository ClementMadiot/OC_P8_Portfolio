import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/ClementMadiot" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=33648501383"
            target="_blank"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="mailto:clementmadiot09@gmail.com" target="_blank">
            <i class="far fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/clm_mdt/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
