import React, { useState } from 'react';
import '../Style/Cart.css';
import Header from '../Controller/Header';
import Footer from '../Controller/Footer';
import Button from '../Controller/CustomButton';
import '../Style/CheckoutPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { cartItems, isLoggedIn } = location.state || {}; // Get the cartItems and isLoggedIn from location.state
  
  const [formData, setFormData] = useState({
    name: 'Admin',
    email: 'admin@gmail.com',
    address: '123 New Street, Kitchener, ON',
    cardNumber: '123456789009',
    expiryDate: '12/25',
    cvv: '123',
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  const calculateTotal = () => {
    return cartItems
      ? cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
      : 0;
  };

  return (
    <div className="new-checkout-container">
      <Header isLoggedIn={isLoggedIn} />
      <div className="new-checkout-header">
        <h1>Checkout</h1>
        <p>Complete your purchase by filling in your details below.</p>
      </div>

      <div className="checkout-grid">
        <div className="product-summary-card">
          <h3>Your Order Summary</h3>
          <div className="product-summary-details">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image">
                    <img src={product.imgSrc || './assets/default-product.jpg'} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <span className="product-name">{product.name}</span>
                    <div className="product-quantity">Qty: {product.quantity}</div>
                    <div className="product-price">${product.price.toFixed(2)} each</div>
                    <div className="product-total">
                      <strong>Total: ${(product.price * product.quantity).toFixed(2)}</strong>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="total-price">
            <strong>Grand Total: ${calculateTotal()}</strong>
          </div>
        </div>

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
          <Button title="Place Order" width="200px" className="new-checkout-button" />
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Order Placed Successfully!🎉</h2>
            <p>Thank you for your order! We will process it shortly.</p>
            <Button title="Close" width="150px" className="modal-close-button" onClick={handleClose} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Checkout;
