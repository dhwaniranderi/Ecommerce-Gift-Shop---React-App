import React from 'react';
import '../Style/Header.css';  
import CustomButton from './CustomButton';
import COLORS from '../Assests/colors';

function Header({ isLoggedIn, setIsLoggedIn, openLoginPopup }) {
  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged in state to false on logout
  };

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
        {/* Show Login if not logged in, else show Logout */}
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
        //   <button onClick={openLoginPopup}>Login</button>

          <CustomButton
          title='Login'
          backgroundColor='#01012c'
          titleColor='#ffcc00'
          hoverBackgroundColor='#ffcc00'
          hoverTitleColor='#01012c'
          height='50px'
          width='150px'
          >

          </CustomButton>

        )}
      </div>
    </header>
  );
}

export default Header;
