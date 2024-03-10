import './navbar.css';
import React from 'react';
import brandLogo from '../../assets/img/brand-logo.png';
import user from '../../assets/img/user.png';

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <nav className="navbar">
          <div className="logo_item">
            <i className="bx bx-menu" id="sidebarOpen"></i>
            <img  src={brandLogo} className="brand-logo" alt=""/>To do list
          </div>

          <div className="search_bar">
            <input type="text" placeholder="Search" />
          </div>

          <div className="navbar_content">
            <a>
              <img src={user} id="user-img"  alt="" />
              <div className="login-logout-popup hide">
                <p className="account-info">Log in as, anme</p>
                <button className="btn" id="user-btn">Log out</button>
              </div>
            </a>
            <i className="bi bi-grid"></i>
            <i className='bx bx-sun' id="darkLight"></i>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
