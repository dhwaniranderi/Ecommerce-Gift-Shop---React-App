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
      <img src={imgSrc} alt={name}  />
      <p><h2>{name}</h2></p>
      <p>{description}</p> {/* This will display the description */}
      <p><h3>{price}</h3></p>
      <p>
        <Button 
          onClick={handleBuyNow} 
          title='Show Details' 
          width="100%" 
        />
      </p>
    </div>
  );
}

export default Product;
