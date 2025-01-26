import React, { useState, useEffect } from 'react';
import '../Style/Cart.css';
import Header from '../Controller/Header';
import Footer from '../Controller/Footer';
import Button from '../Controller/CustomButton';
import ProductModel from '../Model/ProductModel';
import { useNavigate, useLocation } from 'react-router-dom';
import QuantityControl from '../Controller/Quantitycontrol';
import LoginPopup from '../View/LoginPopup';

// Sample products array
const products = [
  { ...ProductModel, id: 1, name: 'Comfortable Slippers', description: 'Soft and cozy slippers, perfect for lounging at home or as a thoughtful gift.', imgSrc: './assets/Product1.jpg', price: 55.50 },
  { ...ProductModel, id: 2, name: 'Decorative Lamp', description: 'Elegant and stylish lamp to brighten up any room, ideal for gifts or home decor.', imgSrc: './assets/Product2.jpg', price: 14.50 },
  { ...ProductModel, id: 3, name: 'Scented Candle', description: 'Aromatic candle with soothing scents, handmade by local artisans.', imgSrc: './assets/Product3.jpg', price: 22.50 },
  { ...ProductModel, id: 4, name: 'Gift Item 4', description: 'First gift item', imgSrc: './assets/Product4.jpg', price: 25.50 },
  { ...ProductModel, id: 5, name: 'Gift Item 5', description: 'Second gift item', imgSrc: './assets/Product5.jpg', price: 15.20 },
  { ...ProductModel, id: 6, name: 'Gift Item 6', description: 'Second gift item', imgSrc: './assets/Product6.jpg', price: 22.50 },
];

const Cart = ({ isLoggedIn, setIsLoggedIn }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract productId and quantity from the location state passed from navigate
  const { productId, quantity } = location.state || {};

  // Initialize the cart with the passed product if any
  useEffect(() => {
    if (productId && quantity) {
      const product = products.find(item => item.id === productId);
      if (product) {
        setCartItems([{ ...product, quantity }]);
      }
    }
  }, [productId, quantity]);

  // Add product to cart or increase quantity if already exists
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Increase product quantity in the cart
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Decrease product quantity in the cart
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  // Handle checkout
  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate('/checkout', { state: { cartItems, isLoggedIn } });
    } else {
      setShowLoginPopup(true);
    }
  };

  // Simulate user login (replace with real logic)
  const loginUser = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  const openLoginPopup = () => setShowLoginPopup(true);
  const closeLoginPopup = () => setShowLoginPopup(false);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} openLoginPopup={openLoginPopup} />

      <div className="new-cart-container">
        <div className="new-cart-header">
          <h1>{isLoggedIn ? 'Welcome to your Cart!' : 'Your Shopping Cart'}</h1>
          <p>{isLoggedIn ? 'Manage your items and proceed to checkout when you are ready!' : 'Please login to proceed with your order.'}</p>
        </div>

        <div className="new-cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="new-cart-item" key={item.id}>
                <img src={item.imgSrc} alt={item.name} />
                <div className="new-item-details">
                  <h3>{item.name}</h3>
                  <p><h4>${(item.price * item.quantity).toFixed(2)}</h4></p>
                  <p>
                    <QuantityControl
                      quantity={item.quantity}
                      onIncrease={() => increaseQuantity(item.id)}
                      onDecrease={() => decreaseQuantity(item.id)}
                    />
                  </p>
                </div>
                <button className="button" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="new-total-price">
            <h3>Total: ${totalPrice}</h3>
            <Button
              title="Proceed to Checkout"
              width="200px"
              className="new-checkout-button"
              onClick={handleCheckout}
            />
          </div>
        )}

        <h3>Available Products</h3>
        <div className="new-product-list">
          {products.map((product) => (
            <div className="new-product" key={product.id}>
              <img src={product.imgSrc} alt={product.name} />
              <h3>{product.name}</h3>
              <p><h4>${product.price.toFixed(2)}</h4></p>
              <p>{product.description}</p>
              <Button title="Add to cart" onClick={() => addToCart(product)} />
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Login Popup */}
      {showLoginPopup && (
        <LoginPopup
          isOpen={showLoginPopup}
          onClose={closeLoginPopup}
          onLoginSuccess={loginUser}
        />
      )}
    </div>
  );
};

export default Cart;
