import React, { useEffect, useState } from "react";
import "../Style/ProductDetails.css";
import Button from "../Controller/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Controller/Header";
import Footer from "../Controller/Footer";
import AddComments from "../Controller/AddComments";
import QuantityControl from '../Controller/Quantitycontrol';

const ProductDetails = ({ isLoggedIn }) => {
  const { id } = useParams(); // Get the product ID from the URL using useParams hook
  const navigate = useNavigate(); // Initialize useNavigate hook to navigate between pages

  const [product, setProduct] = useState(null); // State to store the fetched product details
  const [quantity, setQuantity] = useState(1); // State to store the quantity of the product

  // Static product data (normally this would be fetched from an API)
  const productData = [
    { id: 1, name: "Comfortable Slippers", description: "Soft and cozy slippers.", price: "$55.50", imgSrc: "../assets/Product1.jpg" },
    { id: 2, name: "Decorative Lamp", description: "Elegant and stylish lamp.", price: "$14.50", imgSrc: "../assets/Product2.jpg" },
    { id: 3, name: "Scented Candle", description: "Aromatic candle with soothing scents.", price: "$22.50", imgSrc: "../assets/Product3.jpg" },
    { id: 4, name: "Gift Item 4", description: "First gift item", price: "$25.50", imgSrc: "../assets/Product6.jpg" },
    { id: 5, name: "Gift Item 5", description: "Second gift item", price: "$15.20", imgSrc: "../assets/Product4.jpg" },
    { id: 6, name: "Gift Item 6", description: "Second gift item", price: "$22.50", imgSrc: "../assets/Product5.jpg" },
  ];

  useEffect(() => {
    // Find the product by matching the ID from the URL
    const productDetail = productData.find(product => product.id === parseInt(id));
    setProduct(productDetail); // Set the found product as the state
  }, [id]);

  // Handle quantity changes
  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) => {
      if (action === "increase") return prevQuantity + 1;
      if (action === "decrease" && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  // Function to handle "Add to Cart" button click
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    navigate("/cart", {
      state: {
        productId: product.id,
        quantity: quantity,
      },
    });
  };

  if (!product) {
    return <div>Loading...</div>; // Show loading message if product is not yet fetched
  }

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} /> {/* Display the header of the page */}

      <div className="product-container">
        {/* Product Detail Section */}
        <div className="product-detail-section">
          <div className="product-image-section">
            <img src={product.imgSrc} alt={product.name} /> {/* Display product image */}
          </div>

          <div className="product-info-section">
            <h2 className="product-title">{product.name}</h2> {/* Display product name */}
            <p className="product-description-text">{product.description}</p> {/* Display product description */}
            <p className="product-price-text">{product.price}</p> {/* Display product price */}

            {/* Quantity control */}
            <QuantityControl
              quantity={quantity}
              onIncrease={() => handleQuantityChange("increase")}
              onDecrease={() => handleQuantityChange("decrease")}
            />

            {/* Add to cart button */}
            <Button title="Add to Cart" onClick={handleAddToCart} />
          </div>
        </div>

        {/* If user is not logged in, show a login prompt */}
        {!isLoggedIn && (
          <div className="login-prompt">
            <p>You must be logged in to add items to the cart.</p>
            <Button title="Login" onClick={() => navigate('/login')} />
          </div>
        )}

        {/* Additional Product Information */}
        <div className="product-additional-info">
          <h3>Why Choose {product.name}?</h3>
          <p>
            {product.name} is crafted with high-quality materials that ensure its longevity and elegance. It makes the perfect gift for any occasion.
          </p>
        </div>

        {/* Extended Product Specifications */}
        <div className="product-specs">
          <h3>Specifications</h3>
          <ul>
            <li>Dimensions: 10 x 5 x 2 inches</li>
            <li>Weight: 1.5 lbs</li>
            <li>Material: High-quality fabric</li>
            <li>Color: Assorted</li>
            <li>Suitable for: All occasions</li>
            <li>Package Includes: Gift Box, Greeting Card</li>
            <li>Care Instructions: Spot clean only</li>
          </ul>
        </div>

        {/* Extended Product Features */}
        <div className="product-features-section">
          <h3>Features</h3>
          <ul>
            <li>Elegant design</li>
            <li>Durable materials</li>
            <li>Easy to wrap and gift</li>
            <li>Lightweight and portable</li>
            <li>Perfect for personalization</li>
            <li>Comes with a premium gift box</li>
          </ul>
        </div>

        <AddComments /> {/* Display the comment section for product reviews */}

        {/* Related Products Section */}
        <div className="related-products-section">
          <h3>Related Products</h3>
          {productData
            .filter((item) => item.id !== product.id)
            .map((relatedProduct) => (
              <div key={relatedProduct.id} className="related-product-item">
                <img src={relatedProduct.imgSrc} alt={relatedProduct.name} />
                <h4>{relatedProduct.name}</h4>
                <p className="related-product-price">{relatedProduct.price}</p>
                <Button title="Add to cart" onClick={() => handleAddToCart(relatedProduct.id, 1)} />
              </div>
            ))}
        </div>
      </div>

      <Footer /> {/* Display the footer of the page */}
    </div>
  );
};

export default ProductDetails;
