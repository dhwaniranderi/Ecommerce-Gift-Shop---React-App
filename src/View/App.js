import logo from '../Assests/logo.svg';
import '../Style/App.css';
import CustomButton from '../Controller/CustomButton';
import Header from '../Controller/Header';
import Product from '../Controller/Product';  // Import the Product component
import LoginPopup from './LoginPopup';  // Import the LoginPopup component
import ProductModel from '../Model/ProductModel';


function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const products = [
    { ...ProductModel, id: 1, name: 'Gift Item 1', description: 'First gift item', imgSrc: './assets/Product1.jpg', price: '$25' },
    { ...ProductModel, id: 2, name: 'Gift Item 2', description: 'Second gift item', imgSrc: './assets/Product2.jpg', price: '$30' },
    { ...ProductModel, id: 3, name: 'Gift Item 3', description: 'Third gift item', imgSrc: './assets/Product3.jpg', price: '$20' },
  ];

  return (
    <div className="App">    
    <Header/>
    
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


       {/* Render the LoginPopup component if it's open */}
       <LoginPopup 
        // isOpen={isLoginPopupOpen} 
        // onClose={closeLoginPopup} 
        // onLoginSuccess={() => setIsLoggedIn(true)} // Pass login success handler
      />
  </div>
  );
}

export default App;
