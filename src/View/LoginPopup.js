import React, { useState } from 'react';
import '../Style/LoginPopup.css'; // Add your styles in this CSS file
import CustomButton from '../Controller/CustomButton'; // Import the Button component
import TabButton from '../Controller/TabButton'; // Import the Tab Button component
import AlertPopup from '../Controller/AlertPopup.js'; // Import the Alert popup component
function LoginPopup({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false); // State for password visibility toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Separate state for confirm password visibility
  const [alert, setAlert] = useState(''); // State for error message
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
      onLoginSuccess(); // Notify parent component of successful login
      onClose(); // Close the popup after successful login
    } else {
      console.log('Invalid email or password');
      setAlert('Invalid email or password. Please try again'); // Set the error message
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
            <TabButton
              isActive={activeTab === 'login'}
              label="Login"
              onClick={() => setActiveTab('login')}
            />
            <TabButton
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
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                  />
                  <i
                    className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </div>
              </div>
              <CustomButton
                title='Login'
                backgroundColor='#01012C'
                titleColor='#FFCC00'
                hoverTitleColor='#01012C'
                hoverBackgroundColor='#FFCC00'
                height='50px'
                width='150px'
              >
              </CustomButton>
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
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                  />
                  <i
                    className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm your password"
                  />
                  <i
                    className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </div>
              </div>
              <CustomButton
                title='Sign Up'
                backgroundColor='#01012C'
                titleColor='#FFCC00'
                hoverTitleColor='#01012C'
                hoverBackgroundColor='#FFCC00'
                height='50px'
                width='150px'
              >
              </CustomButton>
            </form>
          )}
          <button onClick={onClose} className="cancel-btn">×</button>
            {/* If there's an error, show the ErrorPopup */}
            {alert && <AlertPopup message={alert} onClose={() => setAlert('')} />}
        </div>
      </div>
    )
  );
}
export default LoginPopup;