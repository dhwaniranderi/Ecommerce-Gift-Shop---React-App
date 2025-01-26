// QuantityControl.js
import React from 'react';
import '../Style/QuantityControl.css'; 

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="quantity-container">
    <button className="quantity-btn" onClick={onDecrease}> - </button>
    <input
      type="number"
      value={quantity}
      readOnly
      className="quantity-input"
    />
    <button className="quantity-btn"  onClick={onIncrease}>+</button>
   </div>
  );
};

export default QuantityControl;
