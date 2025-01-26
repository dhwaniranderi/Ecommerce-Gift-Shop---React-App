import React, { useState } from "react"; // Import React and useState for state management
import Button from "../Controller/CustomButton"; // Import a custom button component
import "../Style/AddComments.css"; // Import CSS for styling
import image from '../Assests/Product1.jpg'; // Import an image for displaying in comments

const Comments = ({ productId }) => {
  // State to manage the list of comments
  const [comments, setComments] = useState([
    {
      id: 3,
      name: "Dhwani R.",
      rating: 4,
      text: "I bought this for my friend's birthday, and she loved it! High quality and great design.",
      image: image, // Optional image associated with the comment
    },
    // Additional predefined comments
    {
      id: 4,
      name: "Yash S.",
      rating: 5,
      text: "Absolutely love this gift item! It exceeded my expectations.",
    },
    {
      id: 5,
      name: "Jasjit S.",
      rating: 2,
      text: "The product was okay, but I expected better quality for the price.",
    },
    {
      id: 6,
      name: "Goldi",
      rating: 5,
      text: "Perfect gift for my wife! She was so happy, and the quality is top-notch. Highly recommend!",
    },
    {
      id: 7,
      name: "Poojan",
      rating: 5,
      text: "Great gift! Arrived on time and looks even better in person. I'm definitely buying again.",
    },
  ]);

  // State for managing new comment input
  const [newComment, setNewComment] = useState({
    rating: 1, // Default rating
    text: "", // Comment text
    image: null, // Optional image
  });

  const [showModal, setShowModal] = useState(false); // Modal visibility state

  // Update newComment state when input fields change
  const handleCommentChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value, // Dynamically update the property
    });
  };

  // Handle image upload and set its preview URL
  const handleImageUpload = (e) => {
    setNewComment({
      ...newComment,
      image: URL.createObjectURL(e.target.files[0]), // Create a temporary URL for the image
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Ensure both rating and comment text are provided
    if (newComment.rating === 0 || newComment.text.trim() === "") {
      setShowModal(true); // Show error modal if validation fails
      return;
    }

    // Create a new comment object
    const commentData = {
      id: comments.length + 1, // Generate unique ID
      name: "Admin", // Placeholder name, can be dynamic based on logged-in user
      rating: newComment.rating,
      text: newComment.text,
      image: newComment.image,
    };

    // Add the new comment to the comments list
    setComments([...comments, commentData]);

    // Reset the newComment state
    setNewComment({ rating: 1, text: "", image: null });
  };

  // Delete a comment by its ID
  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id)); // Filter out the deleted comment
  };

  // Close the error modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="comments-section">
      <h3>Customer Reviews</h3>
      {comments.map((comment) => (
        // Display each comment with rating, text, and optional image
        <div key={comment.id} className="review-item">
          <div className="rating-stars">
            {/* Render filled and unfilled stars based on the rating */}
            {[...Array(5)].map((_, index) => (
              <span key={index} className="ratedstar">
                {index < comment.rating ? "\u2605" : "\u2606"} {/* Filled star: ★, Unfilled star: ☆ */}
              </span>
            ))}
            <span className="review-rating">({comment.rating}.0)</span>
          </div>
          <p className="review-text">"{comment.text}"</p>
          <p className="review-author">- {comment.name}</p>
          {comment.image && <img src={comment.image} alt="review" className="review-image" />}
          {/* Show delete button only for Admin comments */}
          {comment.name === "Admin" && (
            <button className="delete-btn" onClick={() => handleDelete(comment.id)}>Delete</button>
          )}
        </div>
      ))}

      {/* Form for adding a new comment */}
      <div className="add-comment-form">
        <h4>Add your Review</h4>
        <div>
          <label>Rating:</label>
          <div className="star-rating">
            {/* Render 5 clickable star icons */}
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${newComment.rating > index ? 'filled' : ''}`}
                onClick={() => setNewComment({ ...newComment, rating: index + 1 })} // Set rating based on clicked star
                style={{ cursor: "pointer" }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            name="text"
            value={newComment.text}
            onChange={handleCommentChange}
            placeholder="Enter your comment"
          />
        </div>
        <div>
          <label>Upload Image (optional):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <Button title="Submit Review" onClick={handleSubmit} width="200px" />
      </div>

      {/* Modal for empty comment validation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Oops!</h4>
            <p>Please provide a rating and a comment before submitting your review.</p>
            <Button title="Close" onClick={closeModal} width="100px" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
