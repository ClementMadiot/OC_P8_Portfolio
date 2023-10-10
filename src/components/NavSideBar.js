import { useState } from 'react'

window.onload = function () {
  const sidebar = document.querySelector('.sidebar')
  const menu = document.querySelector('#menu')
  const menu_container = document.querySelector('.menu-container')

  let previousToggled = null

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
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.79)'
  }

  menu.addEventListener('click', (e) => {
    sidebar.classList.contains('active') ? closeMenu() : openMenu()
  })

  const openMenu = () => {
    sidebar.classList.add('active')
    sidebar.classList.remove('no-active')
    toggleMenu(menu)
  }

  const closeMenu = () => {
    menu_container.style.paddingLeft = '0px'
    untoggleMenu(menu)

    sidebar.classList.remove('active')
    sidebar.classList.add('no-active')
  }
}

const NavSideBar = () => {
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
              <i className="fa-solid fa-list"></i>
            </button>
          </div>
        </li>
        <li><h3 className={`${isOpen ? 'visible' : 'no-visible'}`}>Menu</h3></li>
        <li>
          <a href="#accueil">
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="fa-solid fa-house"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Accueil
              </span>
            </button>
          </a>
        </li>
        <li>
          <a href="#about">
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="fa-solid fa-user-tie"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Présentation
              </span>
            </button>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="fa-solid fa-file-powerpoint"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Portfolio
              </span>
            </button>
          </a>
        </li>
        <li>
          <a href="#skills">
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="fa-solid fa-code"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Compétences
              </span>
            </button>
          </a>
        </li>
        <li>
          <a href="#services">
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="fa-solid fa-desktop"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Services
              </span>
            </button>
          </a>
        </li>
        <li>
          <a href="#contact">
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="fa-solid fa-envelope"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Contact
              </span>
            </button>
          </a>
        </li>
        <li><h3 className={`${isOpen ? 'visible' : 'no-visible'}`}>Lien</h3></li>
        <li>
          <a href="https://github.com/ClementMadiot" target="_blank"
            rel="noreferrer">
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="fa-brands fa-github"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Mon Github
              </span>
            </button>
          </a>
        </li>
        <li>
          <a href="mailto:clementmadiot09@gmail.com" target="_blank"
            rel="noreferrer">
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="far fa-envelope"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Mon mail
              </span>
            </button>
          </a>
        </li>
        <li>
          <a
            href="https://cvdesignr.com/p/6373b11dbacf3"
            target="_blank"
            rel="noreferrer"
          >
            <button
              role="link"
              className={`nav-icon ${isOpen ? 'open' : 'close'}`}
            >
              <i className="fa-solid fa-download"></i>
              <span className={`${isOpen ? 'visible' : 'no-visible'}`}>
                Mon CV
              </span>
            </button>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default NavSideBar
