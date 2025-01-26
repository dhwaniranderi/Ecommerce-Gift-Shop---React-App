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

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userLoggedIn, setUserLoggedIn] = useState(false); // State to track user login status
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State to control the login popup
  const navigate = useNavigate();
  const location = useLocation();

  // Extract productId and quantity from the location state passed from navigate
  const { productId, quantity } = location.state || {};

  useEffect(() => {
    if (productId && quantity) {
      // Find product based on productId
      const product = products.find(item => item.id === productId);
      if (product) {
        // Add the product to the cart with the specified quantity
        setCartItems([{ ...product, quantity: quantity }]);
      }
    }
  }, [productId, quantity]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    if (userLoggedIn) {
     // Pass cart items (ID and quantity) to the checkout page
     navigate('/checkout', {
      state: {
        cartItems: cartItems, // Passing the items in the cart (ID and quantity)
      },
    });
    } else {
      // Show login popup if the user is not logged in
      setShowLoginPopup(true);
    }
  };

  const loginUser = () => {
    // Simulate a login (you would replace this with actual login logic)
    setUserLoggedIn(true);
    setShowLoginPopup(false); // Close the popup after login
  };

  const openLoginPopup = () => {
    setLoginPopupOpen(true);  
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <div>
      <div className="new-cart-container">

    <Header isLoggedIn={userLoggedIn} setIsLoggedIn={setUserLoggedIn} openLoginPopup={openLoginPopup} />
        <div className="new-cart-header">
          <h1>Your Shopping Cart</h1>
          <p>Manage your items and proceed to checkout when you're ready!</p>
        </div>
        <div className="new-cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="new-cart-item" key={item.id}>
                <img src={item.imgSrc} alt={item.name} />
                <div className="new-item-details">
                  <h3>{item.name}</h3>
                  <p><h4>${(item.price * item.quantity).toFixed(2)}</h4></p>
                  <p><QuantityControl
                    quantity={item.quantity}
                    onIncrease={() => increaseQuantity(item.id)}
                    onDecrease={() => decreaseQuantity(item.id)}
                  /></p>
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
              onClick={handleCheckout} // Handle checkout click
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
          onLoginSuccess={loginUser} // Pass the login success handler to LoginPopup
        />
      )}
    </div>
  );
};

export default Cart;
