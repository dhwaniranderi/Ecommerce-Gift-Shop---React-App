import React, { useEffect, useState } from "react";
import "../Style/ProductDetails.css";
import Button from "../Controller/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Controller/Header";
import Footer from "../Controller/Footer";
import AddComments from "../Controller/AddComments";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details using the ID from URL
    // In a real app, this would be a fetch call to an API
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
      

    const productDetail = productData.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(productDetail);
  }, [id]);

  // Function to handle "Add to Cart" button click
  const handleAddToCart = () => {
    navigate("/cart"); // Navigate to the Cart page
  };

  if (!product) {
    return <div>Loading...</div>; // Show loading until product is fetched
  }

  return (
    <div>
      <Header />

      <div className="product-container">
        <div className="product-detail-section">
          <div className="product-image-section">
            <img src={product.imgSrc} alt={product.name} />
          </div>
          <div className="product-info-section">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description-text">{product.description}</p>
            <p className="product-price-text">{product.price}</p>
            <Button title="Add to cart" onClick={handleAddToCart} />
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
            <li>Dimensions: 10 x 5 x 2 inches</li>
            <li>Weight: 1.5 lbs</li>
            <li>Material: High-quality fabric</li>
            <li>Color: Assorted</li>
            <li>
              Suitable for: All occasions (Birthdays, Anniversaries, Holidays)
            </li>
            <li>
              Package Includes: Gift Box, Greeting Card, Decorative Ribbon
            </li>
            <li>Care Instructions: Spot clean only</li>
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

        {/* <div className="reviews-section">
          <h3>Customer Reviews</h3>
          <div className="review-item">
            <div className="rating-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <span className="review-rating">(4.0)</span>
            </div>
            <p className="review-text">
              "I bought this for my friend's birthday, and she loved it! High
              quality and great design."
            </p>
            <p className="review-author">- Dhwani R.</p>
          </div>
          <div className="review-item">
            <div className="rating-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="review-rating">(5.0)</span>
            </div>
            <p className="review-text">
              "Absolutely love this gift item! It exceeded my expectations."
            </p>
            <p className="review-author">- Yash S.</p>
          </div>
          <div className="review-item">
            <div className="rating-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <span className="star">&#9734;</span>
              <span className="star">&#9734;</span>
              <span className="review-rating">(2.0)</span>
            </div>
            <p className="review-text">
              "The product was okay, but I expected better quality for the
              price."
            </p>
            <p className="review-author">- Jasjit S.</p>
          </div>
          <div className="review-item">
            <div className="rating-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="review-rating">(5.0)</span>
            </div>
            <p className="review-text">
              "Perfect gift for my wife! She was so happy, and the quality is
              top-notch. Highly recommend!"
            </p>
            <p className="review-author">- Goldi.</p>
          </div>
          <div className="review-item">
            <div className="rating-stars">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="review-rating">(5.0)</span>
            </div>
            <p className="review-text">
              "Great gift! Arrived on time and looks even better in person. I'm
              definitely buying again."
            </p>
            <p className="review-author">- Poojan</p>
          </div>
          <AddComments/>
        </div> */}

        <AddComments/>

        {/* Related Products Section */}
        <div className="related-products-section">
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
      <Footer />
    </div>
  );
};

export default ProductDetails;
