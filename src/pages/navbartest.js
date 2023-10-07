import "./navbarsidetest.scss"
const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");
let activeIndex;
shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);
  shrink_btn.classList.add("hovered");
  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});
search.addEventListener("click", () => {
  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});
function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;
  if (activeIndex > 3) {
    topPosition += shortcuts.clientHeight;
  }
  active_tab.style.top = `${topPosition}px`;
}
function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");
  activeIndex = this.dataset.active;
  moveActiveTab();
}
sidebar_links.forEach((link) => link.addEventListener("click", changeLink));
function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;
  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");
  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}
tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});

const navbartest = () => {
  return (
    <nav>
  <div className="sidebar-top">
    <span className="shrink-btn">
    <i className='bx bx-chevron-left'></i>
    </span>
    <img src="./img/logo.png" className="logo" alt=""/>
    <h3 className="hide">Aqumex</h3>
  </div>
  <div className="search">
    <i className='bx bx-search'></i>
    <input type="text" className="hide" placeholder="Quick Search ..."/>
  </div>
  <div className="sidebar-links">
    <ul>
      <div className="active-tab"></div>
      <li className="tooltip-element" data-tooltip="0">
        <a href="#" className="active" data-active="0">
          <div className="icon">
            <i className='bx bx-tachometer'></i>
            <i className='bx bxs-tachometer'></i>
          </div>
          <span className="link hide">Dashboard</span>
        </a>
      </li>
      <li className="tooltip-element" data-tooltip="1">
        <a href="#" data-active="1">
          <div className="icon">
            <i className='bx bx-folder'></i>
            <i className='bx bxs-folder'></i>
          </div>
          <span className="link hide">Projects</span>
        </a>
      </li>
      <li className="tooltip-element" data-tooltip="2">
        <a href="#" data-active="2">
          <div className="icon">
            <i className='bx bx-message-square-detail'></i>
            <i className='bx bxs-message-square-detail'></i>
          </div>
          <span className="link hide">Messages</span>
        </a>
      </li>
      <li className="tooltip-element" data-tooltip="3">
        <a href="#" data-active="3">
          <div className="icon">
            <i className='bx bx-bar-chart-square'></i>
            <i className='bx bxs-bar-chart-square'></i>
          </div>
          <span className="link hide">Analytics</span>
        </a>
      </li>
      <div className="tooltip">
        <span className="show">Dashboard</span>
        <span>Projects</span>
        <span>Messages</span>
        <span>Analytics</span>
      </div>
    </ul>
    <h4 className="hide">Shortcuts</h4>
    <ul>
      <li className="tooltip-element" data-tooltip="0">
        <a href="#" data-active="4">
          <div className="icon">
            <i className='bx bx-notepad'></i>
            <i className='bx bxs-notepad'></i>
          </div>
          <span className="link hide">Tasks</span>
        </a>
      </li>
      <li className="tooltip-element" data-tooltip="1">
        <a href="#" data-active="5">
          <div className="icon">
            <i className='bx bx-help-circle'></i>
            <i className='bx bxs-help-circle'></i>
          </div>
          <span className="link hide">Help</span>
        </a>
      </li>
      <li className="tooltip-element" data-tooltip="2">
        <a href="#" data-active="6">
          <div className="icon">
            <i className='bx bx-cog'></i>
            <i className='bx bxs-cog'></i>
          </div>
          <span className="link hide">Settings</span>
        </a>
      </li>
      <div className="tooltip">
        <span className="show">Tasks</span>
        <span>Help</span>
        <span>Settings</span>
      </div>
    </ul>
  </div>
  <div className="sidebar-footer">
    <a href="#" className="account tooltip-element" data-tooltip="0">
    <i className='bx bx-user'></i>
    </a>
    <div className="admin-user tooltip-element" data-tooltip="1">
      <div className="admin-profile hide">
        <img src="./img/face-1.png" alt=""/>
        <div className="admin-info">
          <h3>John Doe</h3>
          <h5>Admin</h5>
        </div>
      </div>
      <a href="#" className="log-out">
      <i className='bx bx-log-out'></i>
      </a>
    </div>
    <div className="tooltip">
      <span className="show">John Doe</span>
      <span>Logout</span>
    </div>
  </div>
</nav>
  );
};

export default navbartest;