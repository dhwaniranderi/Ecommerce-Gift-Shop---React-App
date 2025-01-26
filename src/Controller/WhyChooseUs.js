// WhyChooseUs.js
import React from 'react';  // Importing React to define the component
import '../Style/WhyChooseUs.css';  // Import the CSS for styling the component

// Functional component to display the "Why Choose Us" section
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">  {/* Wrapper div for the entire section */}
      <h1>Why Choose Us?</h1>  {/* Section heading */}

      <div className="reasons-container">
        {/* Each reason is displayed in a separate "reason-card" div */}
        <div className="reason-card">
          <h2>Quality Products</h2>  {/* Title for the first reason */}
          <p>We provide top-notch quality products that meet all your expectations.</p>  {/* Description for the first reason */}
        </div>

        <div className="reason-card">
          <h2>Fast Delivery</h2>  {/* Title for the second reason */}
          <p>Our shipping is quick and reliable to ensure timely delivery of your orders.</p>  {/* Description for the second reason */}
        </div>

        <div className="reason-card">
          <h2>Customer Support</h2>  {/* Title for the third reason */}
          <p>We offer 24/7 customer support to assist you with any queries you may have.</p>  {/* Description for the third reason */}
        </div>
      </div>
    </div>
  );
};

// Export the component to be used in other parts of the application
export default WhyChooseUs;
