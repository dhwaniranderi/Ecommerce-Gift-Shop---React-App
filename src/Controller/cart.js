import React, { useState } from 'react';
import '../Style/Cart.css'; // Importing the CSS file for styling
import Header from '../Controller/Header'; // Importing the Header component
import Footer from '../Controller/Footer'; // Importing the Footer component
import Button from '../Controller/CustomButton'; // Importing the custom Button component
import ProductModel from '../Model/ProductModel'; // Importing the ProductModel (template) for products
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation to checkout

// Array of products with details like id, name, description, image source, and price
const products = [
  { ...ProductModel, id: 1, name: 'Comfortable Slippers', description: 'Soft and cozy slippers, perfect for lounging at home or as a thoughtful gift.', imgSrc: './assets/Product1.jpg', price: 55.50 },
  { ...ProductModel, id: 2, name: 'Decorative Lamp', description: 'Elegant and stylish lamp to brighten up any room, ideal for gifts or home decor.', imgSrc: './assets/Product2.jpg', price: 14.50 },
  { ...ProductModel, id: 3, name: 'Scented Candle', description: 'Aromatic candle with soothing scents, handmade by local artisans.', imgSrc: './assets/Product3.jpg', price: 22.50 },
  { ...ProductModel, id: 4, name: 'Gift Item 4', description: 'First gift item', imgSrc: './assets/Product4.jpg', price: 25.50 },
  { ...ProductModel, id: 5, name: 'Gift Item 5', description: 'Second gift item', imgSrc: './assets/Product5.jpg', price: 15.20 },
  { ...ProductModel, id: 6, name: 'Gift Item 6', description: 'Second gift item', imgSrc: './assets/Product6.jpg', price: 22.50 },
];

const Cart = () => {
  // useState hook to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Initialize useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Add the product to the cartItems array
  };

  // Function to remove a product from the cart by its id
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id)); // Filter out the item by id
  };

  // Calculate the total price of the items in the cart
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price, 0) // Sum the price of all cart items
    .toFixed(2); // Format the total price to 2 decimal places

  // Function to navigate to the checkout page
  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div>
      <div className="new-cart-container">
        <Header /> {/* Render the Header component */}
        <div className="new-cart-header">
          <h1>Your Shopping Cart</h1> {/* Title for the cart page */}
          <p>Manage your items and proceed to checkout when you're ready!</p> {/* Description */}
        </div>
        <div className="new-cart-items">
          {cartItems.length > 0 ? (
            // Display cart items if any are in the cart
            cartItems.map((item) => (
              <div className="new-cart-item" key={item.id}>
                <img src={item.imgSrc} alt={item.name} /> {/* Display product image */}
                <div className="new-item-details">
                  <h3>{item.name}</h3> {/* Display product name */}
                  <p>${item.price.toFixed(2)}</p> {/* Display product price */}
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button> {/* Remove item from cart */}
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p> // If no items are in the cart, show a message
          )}
        </div>

        {cartItems.length > 0 && (
          // Only display total price and checkout button if there are items in the cart
          <div className="new-total-price">
            <h3>Total: ${totalPrice}</h3> {/* Display the total price */}
            <Button
              title="Proceed to Checkout" // Button title
              width="200px" // Button width
              className="new-checkout-button" // Custom class for button styling
              onClick={handleCheckout} // Handle checkout button click
            />
          </div>
        )}

        <h3>Available Products</h3> {/* Title for the product list */}
        <div className="new-product-list">
          {products.map((product) => (
            // Loop through products and display each one
            <div className="new-product" key={product.id}>
              <img src={product.imgSrc} alt={product.name} /> {/* Display product image */}
              <h4>{product.name}</h4> {/* Display product name */}
              <p>${product.price.toFixed(2)}</p> {/* Display product price */}
              <p>{product.description}</p> {/* Display product description */}
              <Button title="Add to cart" onClick={() => addToCart(product)} /> {/* Button to add product to cart */}
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Cart; // Export the Cart component
