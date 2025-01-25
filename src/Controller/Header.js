import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import '../Style/Header.css';
import CustomButton from './CustomButton'; // Assuming this is imported as needed
import UpdateProfilePopup from '../View/UpdateProfile.js'; // Import the popup component


function Header({ isLoggedIn, setIsLoggedIn, openLoginPopup }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showUpdateProfilePopup, setShowUpdateProfilePopup] = useState(false); // State for controlling popup visibility

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged-in state to false on logout
    setDropdownVisible(false); // Close the dropdown after logout
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Close the dropdown if clicked outside of it
  const handleClickOutside = (e) => {
    if (!e.target.closest('.profile-icon') && e.target.closest('.welcome-message') && !e.target.closest('.dropdown-menu') && !e.target.closest('.welcome-message')) {
      setDropdownVisible(false);
    }
  };

  // Set up the event listener to close the dropdown if clicked outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  
  // Handle opening the update profile popup
  const openUpdateProfilePopup = () => {
    setShowUpdateProfilePopup(true); // Open the popup
    setDropdownVisible(false); // Close the dropdown
  };

  // Handle closing the update profile popup
  const closeUpdateProfilePopup = () => {
    setShowUpdateProfilePopup(false); // Close the popup
  };

  return (
    <header className="site-header">
      <div className="logo">
        <h2>GiftGlimmer</h2>
      </div>
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/cart">Cart</Link></li> 
        </ul>
      </nav>

      <div className="login-button">
        {/* If logged in, show the "Welcome Admin" message and Profile Icon */}
        {isLoggedIn ? (
          <div className="logged-in-section">
            {/* Make "Welcome Admin" clickable to toggle dropdown */}
            <span className="welcome-message" onClick={toggleDropdown}>
              Welcome Admin
            </span>

            {/* Profile Icon with dropdown */}
            <div className="profile-icon" onClick={toggleDropdown}>
              <i className="fa fa-user"></i> {/* Font Awesome User Icon */}
            </div>

            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div className="dropdown-menu">
                <ul>
                <li onClick={openUpdateProfilePopup}>
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
            backgroundColor='#01012c'
            titleColor='#ffcc00'
            hoverTitleColor='#01012c'
            hoverBackgroundColor='#ffcc00'
            height='50px'
            width='150px'
            onClick={openLoginPopup}
          />
        )}
      </div>

      
      {/* Conditionally render the UpdateProfilePopup */}
      {showUpdateProfilePopup && (
        <UpdateProfilePopup onClose={closeUpdateProfilePopup} />
      )}
    </header>
  );
}

export default Header;
