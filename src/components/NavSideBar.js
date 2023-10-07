

const NavSideBar = () => {
  return (
    <div id="side-bar" data-role='sidebar' data-toggle="#sidebar-toggle-2">
      <div className="toggle-btn" id="toggleBtn">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="nav-list">
        <li>
          <a href="#accueil">accueil</a>
        </li>
        <li>
          <a href="#about">présentation</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  )
}

export default NavSideBar
