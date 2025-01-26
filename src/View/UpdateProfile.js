import React, { useState } from 'react';
import '../Style/UpdateProfile.css'; // Add your styles here
import CustomButton from '../Controller/CustomButton'; // Import the Button component
import AlertPopup from '../Controller/AlertPopup.js'; // Import the Alert popup component

function UpdateProfilePopup({ onClose }) {
  // Declare state variables for form inputs and password visibility toggles
  const [email, setEmail] = useState(''); // Store the email input value
  const [oldpassword, setoldPassword] = useState(''); // Store the old password input value
  const [newpassword, setnewPassword] = useState(''); // Store the new password input value
  const [confirmPassword, setConfirmPassword] = useState(''); // Store the confirm password input value
  const [showoldPassword, setShowOldPassword] = useState(false); // Toggle visibility for the old password field
  const [shownewPassword, setShowNewPassword] = useState(false); // Toggle visibility for the new password field
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle visibility for the confirm password field
  const [alert, setAlert] = useState(''); // State for storing alert messages (error or success)

  // Handle form submission (you can add validation and API call logic here)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Check if new password and confirm password match
    if (newpassword !== confirmPassword) {
      setAlert('Passwords do not match'); // Set the error message if passwords don't match
      return;
    }

    // Check if the old password is correct (for demonstration purposes, it's hardcoded)
    if (oldpassword !== "password") {
      setAlert('Old Password is Incorrect'); // Set the error message if old password is incorrect
      return;
    }

    // Proceed with updating profile logic (API call, etc.)
    setAlert('Profile updated successfully!'); // Show success message
    onClose(); // Close the popup after successful update
  };

  return (
    <div>
      {/* If there's an error, show the ErrorPopup */}
      {alert && <AlertPopup message={alert} onClose={() => setAlert('')} />}
      
      <div className="popup-overlay">
        <div className="popup-container">
          <h2>Update Profile</h2>
          {/* Form for updating profile details */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value="admin@gmail.com" // Set the default email value
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
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
                  onChange={(e) => setoldPassword(e.target.value)} // Update old password state on input change
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <div className="password-container">
                <input
                  type={shownewPassword ? "text" : "password"} // Toggle password visibility
                  id="newpassword"
                  value={newpassword}
                  onChange={(e) => setnewPassword(e.target.value)} // Update new password state on input change
                  required
                  placeholder="Enter your password"
                />
                {/* Toggle the visibility icon for the new password field */}
                <i
                  className={`fa ${shownewPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  onClick={() => setShowNewPassword(!shownewPassword)} // Toggle visibility
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <div className="password-container">
                <input
                  type={showConfirmPassword ? "text" : "password"} // Toggle password visibility
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state on input change
                  required
                  placeholder="Confirm your password"
                />
                {/* Toggle the visibility icon for the confirm password field */}
                <i
                  className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle visibility
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
            </div>

            {/* Custom update button */}
            <CustomButton
              title='Update'
              backgroundColor='#01012C'
              titleColor='#FFCC00'
              hoverTitleColor='#01012C'
              hoverBackgroundColor='#FFCC00'
              height='50px'
              width='150px'
            />
          </form>

          {/* Close button to cancel the profile update */}
          <button onClick={onClose} className="cancel-btn">×</button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfilePopup;
