// Product.js
import React from 'react';
import '../Style/Product.css'; // Add your styles in this CSS file
import Button from '../Controller/CustomButton'; // Import the Button component

function Product({ name, description, imgSrc, price, handleBuyNow }) {
  return (
    <div className="product">
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