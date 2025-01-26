import React, { useState, useEffect } from 'react';
import '../Style/Header.css';
import CustomButton from './CustomButton';
import UpdateProfilePopup from '../View/UpdateProfile.js';
import AlertPopup from '../Controller/AlertPopup.js';
import LoginPopup from '../View/LoginPopup.js'; // Import the Login popup component
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showUpdateProfilePopup, setShowUpdateProfilePopup] = useState(false);
  const [alert, setAlert] = useState('');
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownVisible(false);
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Handle Cart Click: Show popup if not logged in
  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate('/checkout');
    } else {
      setIsLoginPopupOpen(true);
    }
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <header className="site-header">
      <div className="logo">
        <h2>GiftGlimmer</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#" onClick={handleCartClick}>Cart</a></li>
        </ul>
      </nav>

      <div className="login-button">
        {isLoggedIn ? (
          <div className="logged-in-section">
            <span className="welcome-message" onClick={toggleDropdown}>Welcome Admin</span>
            <div className="profile-icon" onClick={toggleDropdown}>
              <i className="fa fa-user"></i>
            </div>
            {dropdownVisible && (
              <div className="dropdown-menu">
                <ul>
                  <li onClick={() => setShowUpdateProfilePopup(true)}>
                    <a href="#">Update Profile</a>
                  </li>
                  <li onClick={handleLogout}><a href="#">Logout</a></li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <CustomButton
            title='Login'
            backgroundColor='#01012C'
            titleColor='#FFCC00'
            hoverTitleColor='#01012C'
            hoverBackgroundColor='#FFCC00'
            height='50px'
            width='150px'
            onClick={() => setIsLoginPopupOpen(true)}
          />
        )}
      </div>

      {showUpdateProfilePopup && <UpdateProfilePopup onClose={() => setShowUpdateProfilePopup(false)} />}
      {alert && <AlertPopup message={alert} onClose={() => setAlert('')} />}

      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeLoginPopup}
        onLoginSuccess={handleLoginSuccess}
        isComingFromLogin={false} // Pass false here if the user is redirected from the cart
      />
    </header>
  );
}

export default Header;
