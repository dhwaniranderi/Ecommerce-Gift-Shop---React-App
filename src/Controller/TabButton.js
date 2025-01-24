// TabButton.js
import React from 'react';

function TabButton({ isActive, label, onClick }) {
  return (
    <button
      className={isActive ? 'active' : ''}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default TabButton;