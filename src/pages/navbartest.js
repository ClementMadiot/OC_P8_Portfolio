import './navbarsidetest.scss'
import { useState } from 'react'

window.onload = function () {
  const sidebar = document.querySelector('.sidebar')
  const menu = document.querySelector('#menu')
  const menu_container = document.querySelector('.menu-container')

  // const Accueil = document.querySelector("#navAccueil");
  // const About = document.querySelector("#navAbout");
  // const Portfolio = document.querySelector("#navPortfolio");
  // const Service = document.querySelector("#navService");
  // const Contact = document.querySelector("#navContact");

  let previousToggled = null

  // Accueil.addEventListener("click", (e) => {
  //   toggleMenu(Accueil);
  // });

  const toggleMenu = (button) => {
    if (previousToggled && button !== menu) {
      untoggleMenu(previousToggled)
    }

    button.classList.add('toggled')
    button.style.backgroundColor = '#87bfd7da'

    if (button !== menu) {
      previousToggled = button
    }
  }

  const untoggleMenu = (button) => {
    button.classList.remove('toggled')
    button.style.backgroundColor = '#87bfd7da'
  }

  menu.addEventListener('click', (e) => {
    sidebar.classList.contains('active') ? closeMenu() : openMenu()
  })

  const openMenu = () => {
    sidebar.classList.add('active')
    sidebar.style.width = '250px'
    toggleMenu(menu)
  }

  const closeMenu = () => {
    menu_container.style.paddingLeft = '0px'
    untoggleMenu(menu)

    sidebar.classList.remove('active')
    sidebar.style.width = '78px'
  }
}

const Navbartest = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen((prevState) => {
      return !prevState
    })
  }
  return (
    <aside className="sidebar">
      <ul className="menu-list">
        <li>
          <div className="menu-container">
            <button className="nav-icon" id="menu" onClick={toggleIsOpen}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </li>
        <li>
          <button
            className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            id="navAccueil"
          >
            <i className="fa-solid fa-bars"></i>
            <a
              id="p-Accueil"
              className={`${isOpen ? 'visible' : 'no-visible'}`}
            >
              Accueil
            </a>
          </button>
        </li>
        <li>
          <button className={`nav-icon ${isOpen ? 'open' : 'close'}`}>
            <i className="fa-solid fa-bars"></i>
            <a
              id="p-Accueil"
              className={`${isOpen ? 'visible' : 'no-visible'}`}
            >
              Présentation
            </a>
          </button>
        </li>
        <li>
          <button className={`nav-icon ${isOpen ? 'open' : 'close'}`}>
            <i className="fa-solid fa-bars"></i>
            <a
              id="p-Accueil"
              className={`${isOpen ? 'visible' : 'no-visible'}`}
            >
              Portfolio
            </a>
          </button>
        </li>
        <li>
          <button className={`nav-icon ${isOpen ? 'open' : 'close'}`}>
            <i className="fa-solid fa-bars"></i>
            <a
              id="p-Accueil"
              className={`${isOpen ? 'visible' : 'no-visible'}`}
            >
              Skills
            </a>
          </button>
        </li>
        <li>
          <button className={`nav-icon ${isOpen ? 'open' : 'close'}`}>
            <i className="fa-solid fa-bars"></i>
            <a
              id="p-Accueil"
              className={`${isOpen ? 'visible' : 'no-visible'}`}
            >
              Services
            </a>
          </button>
        </li>
        <li>
          <button className={`nav-icon ${isOpen ? 'open' : 'close'}`}>
            <i className="fa-solid fa-bars"></i>
            <a
              id="p-Accueil"
              className={`${isOpen ? 'visible' : 'no-visible'}`}
            >
              Contact
            </a>
          </button>
        </li>
      </ul>
    </aside>
  )
}

export default Navbartest
