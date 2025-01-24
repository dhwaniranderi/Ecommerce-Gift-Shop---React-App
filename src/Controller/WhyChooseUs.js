// WhyChooseUs.js
import React from 'react';
import '../Style/WhyChooseUs.css';
const WhyChooseUs = () => {
  return (
    <div className>
      <h1>Why Choose Us?</h1>
      <div className="reasons-container">
        <div className="reason-card">
          <h2>Quality Products</h2>
          <p>We provide top-notch quality products that meet all your expectations.</p>
        </div>
        <div className="reason-card">
          <h2>Fast Delivery</h2>
          <p>Our shipping is quick and reliable to ensure timely delivery of your orders.</p>
        </div>
        <div className="reason-card">
          <h2>Customer Support</h2>
          <p>We offer 24/7 customer support to assist you with any queries you may have.</p>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;