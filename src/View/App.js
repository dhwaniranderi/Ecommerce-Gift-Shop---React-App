import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Import necessary React Router components
import '../Style/App.css'; // Import CSS for styling
import Header from '../Controller/Header'; // Import the Header component
import Footer from '../Controller/Footer'; // Import the Footer component
import Product from '../Controller/Product'; // Import the Product component
import LoginPopup from './LoginPopup'; // Import the LoginPopup component
import ProductModel from '../Model/ProductModel'; // Import the ProductModel for default product data
import WhyChooseUs from '../Controller/WhyChooseUs'; // Import the WhyChooseUs component
import CustomerReviews from '../Controller/CustomerReviews'; // Import CustomerReviews component
import CheckoutPage from '../View/CheckoutPage'; // Import CheckoutPage component
import Cart from '../Controller/cart'; // Import Cart component
import ProductDetails from '../View/ProductDetails'; // Import ProductDetails component

// Main content component of the app
function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  const navigate = useNavigate();

  // Function to open the login popup
  const openLoginPopup = () => {
    setLoginPopupOpen(true);
  };

  // Function to close the login popup
  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  // Handle successful login and update login state
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Handle the "Buy Now" action; navigate to cart if logged in, else open login popup
  const handleBuyNow = () => {
    if (isLoggedIn) {
      navigate('/cart'); // Navigate to the cart if logged in
    } else {
      openLoginPopup(); // Open login popup if not logged in
    }
  };

  // Fallback to default products if ProductModel is not available or not an array
  const products = Array.isArray(ProductModel) && ProductModel.length > 0
    ? ProductModel
    : [
        {
          id: 1,
          name: 'Comfortable Slippers',
          description: 'Soft and cozy slippers, perfect for lounging at home or as a thoughtful gift.',
          imgSrc: './assets/Product1.jpg',
          price: '$55.50',
        },
        {
          id: 2,
          name: 'Decorative Lamp',
          description: 'Elegant and stylish lamp to brighten up any room, ideal for gifts or home decor.',
          imgSrc: './assets/Product2.jpg',
          price: '$14.50',
        },
        {
          id: 3,
          name: 'Scented Candle',
          description: 'Aromatic candle with soothing scents, handmade by local artisans.',
          imgSrc: './assets/Product3.jpg',
          price: '$22.50',
        },
        {
          id: 4,
          name: 'Gift Item 4',
          description: 'First gift item',
          imgSrc: './assets/Product6.jpg',
          price: '$25.50',
        },
        {
          id: 5,
          name: 'Gift Item 5',
          description: 'Second gift item',
          imgSrc: './assets/Product4.jpg',
          price: '$15.20',
        },
        {
          id: 6,
          name: 'Gift Item 6',
          description: 'Second gift item',
          imgSrc: './assets/Product5.jpg',
          price: '$22.50',
        },
      ];

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} openLoginPopup={openLoginPopup} />
      
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} onLoginSuccess={handleLoginSuccess} />

      <div className="products-box">
        <div className="products-container">
          {/* Map through products array and render Product component for each item */}
          {products.length > 0 ? (
            products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imgSrc={product.imgSrc}
                price={product.price}
                handleBuyNow={handleBuyNow}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      
      <div className="products-box">
        <CustomerReviews />
      </div>

      <div className="products-box">
        <WhyChooseUs />
      </div>
      
      <Footer />
    </div>
  );
}

// Main App component which handles routing
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/checkout" element={<CheckoutPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/product/:id" element={<ProductDetails isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
