import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Product.css'; // Add your styles in this CSS file
import Button from '../Controller/CustomButton'; // Import the Button component

function Product({ id, name, description, imgSrc, price, handleBuyNow }) {
  const navigate = useNavigate();

  // Handle product click to navigate to ProductDetails page
  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product" onClick={handleProductClick}>
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p> {/* This will display the description */}
      <p>{price}</p>
      <p>
        <Button 
          onClick={handleBuyNow} 
          title='Add to Cart' 
          width="100%" 
        />
      </p>
    </div>
  );
}

export default Product;
