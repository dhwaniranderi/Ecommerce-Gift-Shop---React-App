import React, { useState, useEffect } from 'react';
import '../Style/Header.css';  
import CustomButton from './CustomButton'; // Assuming this is imported as needed

function Header({ isLoggedIn, setIsLoggedIn, openLoginPopup }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

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

  return (
    <header className="site-header">
      <div className="logo">
        <h2>GiftGlimmer</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
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
                  <li><a href="/update-profile">Update Profile</a></li>
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
    </header>
  );
}

export default Header;
