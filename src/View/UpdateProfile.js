import React, { useState } from 'react';
import '../Style/UpdateProfile.css'; // Add your styles here
import CustomButton from '../Controller/CustomButton'; // Import the Button component

function UpdateProfilePopup({ onClose }) {
  // Declare state variables for form inputs and password visibility toggles
  const [email, setEmail] = useState('');
  const [oldpassword, setoldPassword] = useState('');
  const [newpassword, setnewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showoldPassword, setShowOldPassword] = useState(false);
  const [shownewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle form submission (you can add validation and API call logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newpassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if(oldpassword !== "password"){
        alert('Old Password is incorrect');
        return;
    }
    // Proceed with updating profile logic (API call, etc.)
    alert('Profile updated successfully!');
    onClose(); // Close the popup after successful update
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Update Profile</h2>
        {/* Add form fields for updating the profile here */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value="admin@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          
           
          <div className="form-group">
            <label htmlFor="password">Old Password</label>
            <div className="password-container">
              <input
                type={"text"}
                id="oldpassword"
                value={oldpassword}
                onChange={(e) => setoldPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <div className="password-container">
              <input
                type={shownewPassword ? "text" : "password"}
                id="newpassword"
                value={newpassword}
                onChange={(e) => setnewPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              <i
                className={`fa ${shownewPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                onClick={() => setShowNewPassword(!shownewPassword)}
                style={{ cursor: 'pointer' }}
              ></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
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
            title='Update'
            backgroundColor='#01012c'
            titleColor='#ffcc00'
            hoverTitleColor='#01012c'
            hoverBackgroundColor='#ffcc00'
            height='50px'
            width='150px'
          />
        </form>

       
        <button onClick={onClose} className="cancel-btn">×</button>
      </div>
    </div>
  );
}

export default UpdateProfilePopup;
