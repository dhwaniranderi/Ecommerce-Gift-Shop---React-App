import React, { useState } from 'react';
import '../Style/LoginPopup.css'; // Add your styles in this CSS file
import CustomButton from '../Controller/CustomButton'; // Import the Button component

function LoginPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'


  // hardcoded login credentials 
  const loginCredentials = {
    email: 'admin@gmail.com',
    password: 'password',
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  
    // Check if the entered credentials match the hardcoded credentials
    if (email === loginCredentials.email && password === loginCredentials.password) {
      console.log('Login successful');
      onClose(); // Close the popup after successful login
    } else {
      console.log('Invalid email or password');
      alert('Invalid email or password. Please try again.');
    }
  };
  

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', email, password);
    onClose(); // Close the popup after signup attempt
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-container">
          <h2>{activeTab === 'login' ? 'Login' : 'Sign Up'}</h2>
          
          <div className="tabs">
            <CustomButton 
              isActive={activeTab === 'login'} 
              label="Login" 
              onClick={() => setActiveTab('login')} 
            />
            <CustomButton 
              isActive={activeTab === 'signup'} 
              label="Sign Up" 
              onClick={() => setActiveTab('signup')} 
            />
          </div>

          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <CustomButton type="submit" className="submit-btn">Login</CustomButton>
            </form>
          ) : (
            <form onSubmit={handleSignUpSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm your password"
                />
              </div>
              <CustomButton type="submit" className="submit-btn">Sign Up</CustomButton>
            </form>
          )}

          <button onClick={onClose} className="close-btn">Close</button>
        </div>
      </div>
    )
  );
}

export default LoginPopup;
