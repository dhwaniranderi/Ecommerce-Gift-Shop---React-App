import React from 'react';
import '../Style/CustomButton.css';  // Ensure correct path
import COLORS from '../Assests/colors';

function CustomButton({
  title,
  onClick,
  height,
  width,
  backgroundColor,
  titleColor,
  hoverBackgroundColor,
  hoverTitleColor,
  borderRadius,
}) {
  return (
    <button
      className="custom-button"
      style={{
        height: height || "50px",  // Use default only if prop is not provided
        width: width || "150px",
        backgroundColor: backgroundColor || COLORS.buttonBGColor,
        color: titleColor || COLORS.buttonTitleColor,
        borderRadius: borderRadius || "5px",
        fontWeight: 'bold',
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = hoverBackgroundColor || COLORS.buttonHoverBGColor;
        e.target.style.color = hoverTitleColor || COLORS.buttonHoverTitleColor;
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = backgroundColor || COLORS.buttonBGColor;
        e.target.style.color = titleColor || COLORS.buttonTitleColor;
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

// Prop validation to enforce required fields
CustomButton.propTypes = {
  title: (props, propName, componentName) => {
    if (!props[propName]) {
      return new Error(`The prop '${propName}' is required in '${componentName}'.`);
    }
  },
  onClick: (props, propName, componentName) => {
    if (!props[propName]) {
      return new Error(`The prop '${propName}' is required in '${componentName}'.`);
    }
  },
};

export default CustomButton;
