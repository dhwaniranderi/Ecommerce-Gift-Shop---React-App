import React, { useState } from 'react';
import '../Style/Cart.css';
import Header from '../Controller/Header';
import Footer from '../Controller/Footer';
import Button from '../Controller/CustomButton';
import '../Style/CheckoutPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Static product data (for demo purposes)
const dummyProductData = [
  {
    id: 1,
    name: 'Comfortable Slippers',
    description: 'First gift item.',
    quantity: 2,
    price: 55.50,
    imageUrl: './assets/Product1.jpg', // Placeholder image URL
  },
  {
    id: 2,
    name: 'Decorative Lamp',
    description: 'Second gift item.',
    quantity: 1,
    price: 15.50,
    imageUrl: './assets/Product2.jpg', // Placeholder image URL
  },
];

// Dummy checkout data for pre-filling the form
const dummyCheckoutData = {
  name: 'Admin',
  email: 'admin@gail.com',
  address: '123 New Street, Kitchener, ON',
  cardNumber: '123456789009',
  expiryDate: '12/25',
  cvv: '123',
};

const Checkout = () => {
  const [formData, setFormData] = useState(dummyCheckoutData); // State to store form data
  const [showModal, setShowModal] = useState(false); // State for showing success modal
  const navigate = useNavigate(); // Initialize useNavigate to navigate to different pages

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update corresponding form field
  };

  // Handle form submission (place order)
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show modal on order success
  };

  // Close the modal and navigate back to the home page
  const handleClose = () => {
    setShowModal(false); // Close the modal
    navigate('/'); // Navigate to home page
  };

  // Calculate the total price by summing up each product's price multiplied by its quantity
  const calculateTotal = () => {
    return dummyProductData.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div className="new-checkout-container">
      <Header /> {/* Render Header */}
      <div className="new-checkout-header">
        <h1>Checkout</h1>
        <p>Complete your purchase by filling in your details below.</p>
      </div>

      {/* Checkout Grid Layout */}
      <div className="checkout-grid">
        {/* Product Summary in Card View */}
        <div className="product-summary-card">
          <h3>Your Order Summary</h3>
          <div className="product-summary-details">
            {dummyProductData.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-name">{product.name}</span>
                  <span className="product-description">{product.description}</span>
                  <div className="product-quantity">Qty: {product.quantity}</div>
                  <div className="product-price">${product.price.toFixed(2)} each</div>
                  <div className="product-total">
                    <strong>Total: ${(product.price * product.quantity).toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total-price">
            <strong>Total: ${calculateTotal()}</strong> {/* Display total price */}
          </div>
        </div>

        {/* Checkout Form in Card View */}
        <form className="new-checkout-form" onSubmit={handleSubmit}>
          <div className="new-form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="new-form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="new-form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="new-form-group">
            <label>Card Number</label>
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
          </div>
          <div className="new-form-row">
            <div className="new-form-group">
              <label>Expiry Date</label>
              <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
            </div>
            <div className="new-form-group">
              <label>CVV</label>
              <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
            </div>
          </div>
          <Button title="Place Order" width="200px" className="new-checkout-button" /> {/* Custom Button to place order */}
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Order Placed Successfully!🎉</h2>
            <p>Thank you for your order! We will process it shortly.</p>
            <Button title="Close" width="150px" className="modal-close-button" onClick={handleClose} /> {/* Use handleClose to navigate */}
          </div>
        </div>
      )}

      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default Checkout;
