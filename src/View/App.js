import logo from '../Assests/logo.svg';
import React, { useState } from 'react';
import '../Style/App.css';
import CustomButton from '../Controller/CustomButton';
import Header from '../Controller/Header';
import Footer from '../Controller/Footer';
import Product from '../Controller/Product';  // Import the Product component
import LoginPopup from './LoginPopup';  // Import the LoginPopup component
import ProductModel from '../Model/ProductModel';
import WhyChooseUs from '../Controller/WhyChooseUs';
import CustomerReviews from '../Controller/CustomerReviews';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  

  const products = [
    { ...ProductModel, id: 1, name: 'Comfortable Slippers', description: 'Soft and cozy slippers, perfect for lounging at home or as a thoughtful gift.', imgSrc: './assets/Product1.jpg', price: '$55.50' },
    { ...ProductModel, id: 2, name: 'Decorative Lamp', description: 'Elegant and stylish lamp to brighten up any room, ideal for gifts or home decor.', imgSrc: './assets/Product2.jpg', price: '$14.50' },
    { ...ProductModel, id: 3, name: 'Scented Candle', description: 'Aromatic candle with soothing scents, handmade by local artisans.', imgSrc: './assets/Product3.jpg', price: '$22.50' },
    { ...ProductModel, id: 4, name: 'Gift Item 4', description: 'First gift item', imgSrc: './assets/Product6.jpg', price: '$25.50' },
    { ...ProductModel, id: 5, name: 'Gift Item 5', description: 'Second gift item', imgSrc: './assets/Product4.jpg', price: '$15.20' },
    { ...ProductModel, id: 6, name: 'Gift Item 6', description: 'Second gift item', imgSrc: './assets/Product5.jpg', price: '$22.50' },
    
  ];

  const openLoginPopup = () => {
    setLoginPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">    
    {/* <Header openLoginPopup={openLoginPopup} /> */}
    
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} openLoginPopup={openLoginPopup} />
    <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} onLoginSuccess={handleLoginSuccess} />
    
    {/* Render multiple Product components */}
    <div className="products-box">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              imgSrc={product.imgSrc}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="products-box">
      <CustomerReviews/>
      </div>
      <div className="products-box">
      <WhyChooseUs/>
      </div>
      <Footer/>

{/* 
      Render the LoginPopup component if it's open
      <LoginPopup 
        isOpen={isLoginPopupOpen} 
        onClose={closeLoginPopup} 
        onLoginSuccess={() => setIsLoggedIn(true)} // Pass login success handler
      /> */}


    
  </div>
  );
}

export default App;
