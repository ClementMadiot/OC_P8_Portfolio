import "./navbarsidetest.scss"

window.onload=function(){
  const sidebar = document.querySelector(".sidebar");
  const menu = document.querySelector("#menu");
  const menu_container = document.querySelector(".menu-container");
  
  
  const search = document.querySelector("#search");
  
  let previousToggled = null;
  
  search.addEventListener("click", (e) => {
    toggleMenu(search);
  });
  
  const toggleMenu = (button) => {
    if (previousToggled && button !== menu) {
      untoggleMenu(previousToggled);
    }
  
    button.classList.add("toggled");
    button.style.backgroundColor = "#8ed7c6";
  
    if (button !== menu) {
      previousToggled = button;
    }
  };
  
  const untoggleMenu = (button) => {
    button.classList.remove("toggled");
    button.style.backgroundColor = "#18c29c";
  };
  
  menu.addEventListener("click", (e) => {
    sidebar.classList.contains("active") ? closeMenu() : openMenu();
  });
  
  const openMenu = () => {
    sidebar.classList.add("active");
    sidebar.style.width = "250px";
  
    toggleMenu(menu);
  
    let p_search = document.createElement("a");
    p_search.id = "p-search";
    p_search.innerHTML = "Search";
    search.style.width = "220px";
    search.style.justifyContent = "left";
    search.appendChild(p_search);
  
  };
  
  const closeMenu = () => {
    menu_container.style.paddingLeft = "0px";
  
    untoggleMenu(menu);
  
    search.removeChild(document.getElementById("p-search"));
    search.style.width = "50px";
    search.style.justifyContent = "center";
  
    sidebar.classList.remove("active");
    sidebar.style.width = "78px";
  };

}



const navbartest = () => {
  return (
    <aside className="sidebar">
        <ul className="menu-list">
          <li>
            <div className="menu-container">
              <button className="icon" id="menu">
                <img src="../assets/images/NavSide/menu.svg" alt="menu" />
              </button>
            </div>
          </li>
          <li>
            <button className="icon" id="search">
              <img src="../assets/images/NavSide/search.svg" alt="search" />
            </button>
          </li>
        </ul>
      </aside>
  );
};

export default navbartest;