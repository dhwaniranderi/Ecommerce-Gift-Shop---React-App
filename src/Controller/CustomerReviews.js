// CustomerReviews.js
import React from 'react';
import { reviews } from '../Model/ReviewModel'; // Import the review data
import  '../Style/CustomerReviews.css';  // Import CSS for styling
const CustomerReviews = () => {
  return (
    <div className>
      <h1>Customer Reviews</h1> {/* Section heading for reviews */}
      <div className="review-grid">
        {/* Loop through the reviews array and render each review */}
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <h2>{review.customerName}</h2> {/* Reviewer's name */}
            <p>{review.reviewText}</p> {/* Review content */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomerReviews;