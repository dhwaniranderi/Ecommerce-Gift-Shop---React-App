import React, { useState } from "react";
import Button from "../Controller/CustomButton";
import "../Style/AddComments.css";
import image from '../Assests/Product1.jpg';

const Comments = ({ productId }) => {
  const [comments, setComments] = useState([
    {
      id: 3,
      name: "Dhwani R.",
      rating: 4,
      text: "I bought this for my friend's birthday, and she loved it! High quality and great design.",
      image: image,
    },
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

  const [newComment, setNewComment] = useState({
    rating: 1,
    text: "",
    image: null,
  });

  const [showModal, setShowModal] = useState(false); // To control the visibility of the modal

  const handleCommentChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    setNewComment({
      ...newComment,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = () => {
    // Validation to ensure that rating and comment text are not empty
    if (newComment.rating === 0 || newComment.text.trim() === "") {
      setShowModal(true); // Show modal when validation fails
      return;
    }

    const commentData = {
      id: comments.length + 1,
      name: "Admin", // This should be dynamic based on the logged-in user
      rating: newComment.rating,
      text: newComment.text,
      image: newComment.image,
    };
    
    setComments([...comments, commentData]);
    setNewComment({ rating: 1, text: "", image: null });
  };

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const closeModal = () => {
    setShowModal(false); // Close modal when the user acknowledges
  };

  return (
    <div className="comments-section">
      <h3>Customer Reviews</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="review-item">
          <div className="rating-stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="star">
                {index < comment.rating ? "\u2605" : "\u2606"}
              </span>
            ))}
            <span className="review-rating">({comment.rating}.0)</span>
          </div>
          <p className="review-text">"{comment.text}"</p>
          <p className="review-author">- {comment.name}</p>
          {comment.image && <img src={comment.image} alt="review" className="review-image" />}
          {comment.name === "Admin" && (
            <button className="delete-btn" onClick={() => handleDelete(comment.id)}>Delete</button>
          )}
        </div>
      ))}

      <div className="add-comment-form">
        <h4>Add your Review</h4>
        <div>
          <label>Rating:</label>
          <select
            name="rating"
            value={newComment.rating}
            onChange={handleCommentChange}
          >
            {[...Array(5)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1} Star{index > 0 && "s"}
              </option>
            ))}
          </select>
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
        <Button title="Submit Review" onClick={handleSubmit} width='200px'/>
      </div>

      {/* Modal for empty comment acknowledgement */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Oops!</h4>
            <p>Please provide a rating and a comment before submitting your review.</p>
            <Button title="Close" onClick={closeModal} width='100px'/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comments;
