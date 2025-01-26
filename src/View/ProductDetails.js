import React, { useEffect, useState } from "react";
import "../Style/ProductDetails.css";
import Button from "../Controller/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Controller/Header";
import Footer from "../Controller/Footer";
import AddComments from "../Controller/AddComments";
import QuantityControl from '../Controller/Quantitycontrol';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL using useParams hook
  const navigate = useNavigate(); // Initialize useNavigate hook to navigate between pages

  const [product, setProduct] = useState(null); // State to store the fetched product details
  const [quantity, setQuantity] = useState(1); // State to store the quantity of the product

  useEffect(() => {
    // Fetch the product details using the ID from URL
    const productData = [
      {
        id: 1,
        name: "Comfortable Slippers",
        description: "Soft and cozy slippers, perfect for lounging at home or as a thoughtful gift.",
        price: "$55.50",
        imgSrc: "../assets/Product1.jpg",
      },
      {
        id: 2,
        name: "Decorative Lamp",
        description: "Elegant and stylish lamp to brighten up any room, ideal for gifts or home decor.",
        price: "$14.50",
        imgSrc: "../assets/Product2.jpg",
      },
      {
        id: 3,
        name: "Scented Candle",
        description: "Aromatic candle with soothing scents, handmade by local artisans.",
        price: "$22.50",
        imgSrc: "../assets/Product3.jpg",
      },
      {
        id: 4,
        name: "Gift Item 4",
        description: "First gift item",
        price: "$25.50",
        imgSrc: "../assets/Product6.jpg",
      },
      {
        id: 5,
        name: "Gift Item 5",
        description: "Second gift item",
        price: "$15.20",
        imgSrc: "../assets/Product4.jpg",
      },
      {
        id: 6,
        name: "Gift Item 6",
        description: "Second gift item",
        price: "$22.50",
        imgSrc: "../assets/Product5.jpg",
      },
    ];

    // Find the product by matching the ID from the URL
    const productDetail = productData.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(productDetail); // Set the found product as the state
  }, [id]);

  // Function to handle "Add to Cart" button click
  const handleAddToCart = (productId, quantity) => {
    // Only pass valid data that can be cloned (e.g., numbers, strings, arrays, etc.)
    navigate("/cart", {
      state: {
        productId: productId,
        quantity: quantity,
      },
    });
  };
  
  // Handle increase in quantity
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Handle decrease in quantity (minimum 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  if (!product) {
    return <div>Loading...</div>; // Show loading message if product is not yet fetched
  }

  return (
    <div>
      <Header /> {/* Display the header of the page */}

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

            <p><QuantityControl
                    quantity={quantity}
                    onIncrease={() => increaseQuantity()}
                    onDecrease={() => decreaseQuantity()}
                  /></p>

            <Button title="Add to cart" onClick={(e) => handleAddToCart(product.id, quantity, e)} /> {/* Add to cart button */}
          </div>
        </div>

        {/* Additional Product Information */}
        <div className="product-additional-info">
          <h3>Why Choose {product.name}?</h3>
          <p>
            {product.name} is crafted with high-quality materials that ensure
            its longevity and elegance. It makes the perfect gift for any
            occasion, from birthdays to anniversaries. Its sleek design and
            lightweight construction make it an ideal present for anyone on your
            list. Plus, it comes beautifully packaged, ready for gifting!
          </p>
        </div>

        {/* Extended Product Specifications */}
        <div className="product-specs">
          <h3>Specifications</h3>
          <ul>
            <li>Dimensions: 10 x 5 x 2 inches</li> {/* Product dimension */}
            <li>Weight: 1.5 lbs</li> {/* Product weight */}
            <li>Material: High-quality fabric</li> {/* Material used */}
            <li>Color: Assorted</li> {/* Available colors */}
            <li>
              Suitable for: All occasions (Birthdays, Anniversaries, Holidays)
            </li> {/* Suggested use cases */}
            <li>
              Package Includes: Gift Box, Greeting Card, Decorative Ribbon
            </li> {/* Included accessories */}
            <li>Care Instructions: Spot clean only</li> {/* Care instructions */}
          </ul>
        </div>

        {/* Extended Product Features */}
        <div className="product-features-section">
          <h3>Features</h3>
          <ul>
            <li>Elegant design that suits all tastes</li>
            <li>Durable and long-lasting materials</li>
            <li>Easy to wrap and gift</li>
            <li>Lightweight and portable</li>
            <li>Perfect for personalization (engraving options available)</li>
            <li>Comes with a premium gift box for easy presentation</li>
          </ul>
        </div>

        <AddComments /> {/* Display the comment section for product reviews */}

        {/* Related Products Section */}
        <div className="related-products-section">
          {/* Display related product items */}
          <div className="related-product-item">
            <img src="../assets/Product2.jpg" alt="Gift Item 2" />
            <h4>Gift Item 2</h4>
            <p className="related-product-price">$30.00</p>
            <Button title="Add to cart" onClick={handleAddToCart} />
          </div>
          <div className="related-product-item">
            <img src="../assets/Product3.jpg" alt="Gift Item 3" />
            <h4>Gift Item 3</h4>
            <p className="related-product-price">$40.00</p>
            <Button title="Add to cart" onClick={handleAddToCart} />
          </div>
          <div className="related-product-item">
            <img src="../assets/Product4.jpg" alt="Gift Item 4" />
            <h4>Gift Item 4</h4>
            <p className="related-product-price">$35.00</p>
            <Button title="Add to cart" onClick={handleAddToCart} />
          </div>
          <div className="related-product-item">
            <img src="../assets/Product5.jpg" alt="Gift Item 5" />
            <h4>Gift Item 5</h4>
            <p className="related-product-price">$20.00</p>
            <Button title="Add to cart" onClick={handleAddToCart} />
          </div>
        </div>
      </div>

      <Footer /> {/* Display the footer of the page */}
    </div>
  );
};

export default ProductDetails;
