import React, { useState } from 'react';
import '../Style/Cart.css';
import Header from '../Controller/Header';
import Footer from '../Controller/Footer';
import Button from '../Controller/CustomButton';
import ProductModel from '../Model/ProductModel';

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

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div>
      <div className="new-cart-container">
        <Header />
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
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="new-total-price">
            <h3>Total: ${totalPrice}</h3>
            <Button title="Proceed to Checkout" width="200px" className="new-checkout-button" />
          </div>
        )}
        
        <h3>Available Products</h3>
        <div className="new-product-list">
          {products.map((product) => (
            <div className="new-product" key={product.id}>
              <img src={product.imgSrc} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
              <p>{product.description}</p>
              <Button title='Add to cart' onClick={() => addToCart(product)} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
