// TabButton.js
import React from 'react';  // Importing React to define the component

// TabButton functional component that takes in three props: isActive, label, and onClick
function TabButton({ isActive, label, onClick }) {
  return (
    <button
      // Conditional class name: if isActive is true, add the 'active' class to the button
      className={isActive ? 'active' : ''}

      // The onClick event triggers the onClick function passed from the parent component
      onClick={onClick}
    >
      {/* Display the label text passed as a prop */}
      {label}
    </button>
  );
}

// Export the TabButton component to be used in other parts of the application
export default TabButton;
