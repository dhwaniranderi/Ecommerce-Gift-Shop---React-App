import React from 'react';
import '../Style/AlertPopup.css'; // You can define custom styles here
function AlertPopup({ message, onClose }) {
  return (
    <div className="alert-popup-overlay">
      <div className="alert-popup-container">
        <h3>Alert</h3>
        <p>{message}</p>
        <button className="close-alert-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default AlertPopup;