import React from 'react';
import '../Style/CustomButton.css';  // Importing the CSS file for the button's styling
import COLORS from '../Assests/colors'; // Importing a colors module to use predefined colors for the button

// CustomButton functional component that accepts multiple props for styling and behavior
function CustomButton({
  title,  // Button title
  onClick,  // Click handler function
  height,  // Height of the button
  width,  // Width of the button
  backgroundColor,  // Background color of the button
  titleColor,  // Text color of the button
  hoverBackgroundColor,  // Background color when mouse hovers over the button
  hoverTitleColor,  // Text color when mouse hovers over the button
  borderRadius,  // Border radius for rounded corners
}) {
  return (
    <button
      className="custom-button"  // Assigning the class name for button styling
      style={{
        height: height || "50px",  // If height prop is not provided, default to 50px
        width: width || "150px",  // If width prop is not provided, default to 150px
        backgroundColor: backgroundColor || COLORS.buttonBGColor,  // Default to the predefined button background color
        color: titleColor || COLORS.buttonTitleColor,  // Default to the predefined text color
        borderRadius: borderRadius || "5px",  // Default to a border radius of 5px
        fontWeight: 'bold',  // Make the button text bold
        transition: 'all 0.3s ease-in-out'  // Smooth transition for hover effects
      }}
      onMouseOver={(e) => {
        // Change the background color and text color when mouse hovers over the button
        e.target.style.backgroundColor = hoverBackgroundColor || COLORS.buttonHoverBGColor; // Default hover background color
        e.target.style.color = hoverTitleColor || COLORS.buttonHoverTitleColor; // Default hover text color
      }}
      onMouseOut={(e) => {
        // Revert the background color and text color when mouse leaves the button
        e.target.style.backgroundColor = backgroundColor || COLORS.buttonBGColor; // Revert to the original background color
        e.target.style.color = titleColor || COLORS.buttonTitleColor; // Revert to the original text color
      }}
      onClick={onClick}  // Button click handler
    >
      {title}  {/* Display the title of the button passed as a prop */}
    </button>
  );
}

// Prop validation to ensure that the title and onClick props are provided
CustomButton.propTypes = {
  title: (props, propName, componentName) => {
    if (!props[propName]) {
      // Error message if the 'title' prop is missing
      return new Error(`The prop '${propName}' is required in '${componentName}'.`);
    }
  },
  onClick: (props, propName, componentName) => {
    if (!props[propName]) {
      // Error message if the 'onClick' prop is missing
      return new Error(`The prop '${propName}' is required in '${componentName}'.`);
    }
  },
};

export default CustomButton;  // Exporting the CustomButton component to be used in other parts of the app
