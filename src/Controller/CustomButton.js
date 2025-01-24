import React from 'react';
import '../Style/CustomButton.css';  // Ensure correct path

function CustomButton({
  title = "Click Me",         // Default button text
  height = "50px",            // Default height
  width = "150px",            // Default width
  backgroundColor = "#01012c", // Default background color
  titleColor = "white",        // Default title color
  hoverBackgroundColor = "white", // Default hover background
  hoverTitleColor = "yellow",      // Default hover title color
  borderRadius = "5px",        // Default border radius
  onClick,                     // Click event handler
}) {
  return (
    <button
      className="custom-button"
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        color: titleColor,
        borderRadius: borderRadius,
        fontWeight: 'bold',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = hoverBackgroundColor;
        e.target.style.color = hoverTitleColor;
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = backgroundColor;
        e.target.style.color = titleColor;
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
