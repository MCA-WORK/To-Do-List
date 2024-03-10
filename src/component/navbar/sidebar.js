import './navbar.css';
import React from 'react';

const Sidebar = () => {
  return (
    <div>
      {/* sidebar */}
      <nav className="sidebar">
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_dahsboard"></div>
            {/* duplicate or remove this li tag if you want to add or remove navlink with submenu */}
            {/* start */}
            <li className="item">
              <div className="nav_link submenu_item">
                <span className="navlink_icon">
                  <i className="bx bx-home-alt"></i>
                </span>
                <span className="navlink">Home</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </div>

              <ul className="menu_items submenu">
                <li><a href="#" className="nav_link sublink">Nav Sub Link</a></li>
                <li><a href="#" className="nav_link sublink">Nav Sub Link</a></li>
                <li><a href="#" className="nav_link sublink">Nav Sub Link</a></li>
                <li><a href="#" className="nav_link sublink">Nav Sub Link</a></li>
              </ul>
            </li>
            {/* end */}

            {/* duplicate this li tag if you want to add or remove  navlink with submenu */}
            {/* start */}
            <li className="item">
              <div className="nav_link submenu_item">
                <span className="navlink_icon">
                  <i className="bx bx-grid-alt"></i>
                </span>
                <span className="navlink">Overview</span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </div>

              <ul className="menu_items submenu">
                <li><a href="#" className="nav_link sublink">Nav Sub Link</a></li>
                <li><a href="#" className="nav_link sublink">Nav Sub Link</a></li>
                <li><a href="#" className="nav_link sublink">Nav Sub Link</a></li>
                <li><a href="#" className="nav_link sublink">Nav Sub Link</a></li>
              </ul>
            </li>
            {/* end */}
          </ul>

          <ul className="menu_items">
            <div className="menu_title menu_editor"></div>
            {/* duplicate these li tag if you want to add or remove navlink only */}
            {/* Start */}
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bxs-magic-wand"></i>
                </span>
                <span className="navlink">Magic build</span>
              </a>
            </li>
            {/* End */}

            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-loader-circle"></i>
                </span>
                <span className="navlink">Filters</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-filter"></i>
                </span>
                <span className="navlink">Filter</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-cloud-upload"></i>
                </span>
                <span className="navlink">Upload new</span>
              </a>
            </li>
          </ul>
          <ul className="menu_items">
            <div className="menu_title menu_setting"></div>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-flag"></i>
                </span>
                <span className="navlink">Notice board</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-medal"></i>
                </span>
                <span className="navlink">Award</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-cog"></i>
                </span>
                <span className="navlink">Setting</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="bx bx-layer"></i>
                </span>
                <span className="navlink">Features</span>
              </a>
            </li>
          </ul>

          {/* Sidebar Open / Close */}
          <div className="bottom_content">
            <div className="bottom expand_sidebar">
              <span> Expand</span>
              <i className='bx bx-log-in'></i>
            </div>
            <div className="bottom collapse_sidebar">
              <span> Collapse</span>
              <i className='bx bx-log-out'></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;




// const body = document.querySelector("body");
// const darkLight = document.querySelector("#darkLight");
// const sidebar = document.querySelector(".sidebar");
// const submenuItems = document.querySelectorAll(".submenu_item");
// const sidebarOpen = document.querySelector("#sidebarOpen");
// const sidebarClose = document.querySelector(".collapse_sidebar");
// const sidebarExpand = document.querySelector(".expand_sidebar");
// sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

// sidebarClose.addEventListener("click", () => {
//   sidebar.classList.add("close", "hoverable");
// });
// sidebarExpand.addEventListener("click", () => {
//   sidebar.classList.remove("close", "hoverable");
// });

// sidebar.addEventListener("mouseenter", () => {
//   if (sidebar.classList.contains("hoverable")) {
//     sidebar.classList.remove("close");
//   }
// });
// sidebar.addEventListener("mouseleave", () => {
//   if (sidebar.classList.contains("hoverable")) {
//     sidebar.classList.add("close");
//   }
// });

// darkLight.addEventListener("click", () => {
//   body.classList.toggle("dark");
//   if (body.classList.contains("dark")) {
//     document.setI
//     darkLight.classList.replace("bx-sun", "bx-moon");
//   } else {
//     darkLight.classList.replace("bx-moon", "bx-sun");
//   }
// });

// submenuItems.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("show_submenu");
//     submenuItems.forEach((item2, index2) => {
//       if (index !== index2) {
//         item2.classList.remove("show_submenu");
//       }
//     });
//   });
// });

// if (window.innerWidth < 768) {
//   sidebar.classList.add("close");
// } else {
//   sidebar.classList.remove("close");
// }