//import logo from '~/public/Assets/logo.svg';
import '../Style/App.css';
import CustomButton from '../Controller/CustomButton';
import Header from '../Controller/Header';
import Product from '../Controller/Product';  // Import the Product component
import LoginPopup from './LoginPopup';  // Import the LoginPopup component

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };


  
  // Hardcoded product data
  const products = [
    {
      id: 1,
      name: 'Gift Item 1',
      description: 'Description of the first gift item.',
      imgSrc: "../Assets/Product1.jpg",
      price: '$25',
    },
    {
      id: 2,
      name: 'Gift Item 2',
      description: 'Description of the second gift item.',
      imgSrc: './assets/Product2.jpg',
      price: '$30',
    },
    {
      id: 3,
      name: 'Gift Item 3',
      description: 'Description of the third gift item.',
      imgSrc: './assets/Product3.jpg',
      price: '$20',
    },
    {
      id: 4,
      name: 'Gift Item 4',
      description: 'Description of the fourth gift item.',
      imgSrc: './assets/Product5.jpg',
      price: '$40',
    },
    {
      id: 5,
      name: 'Gift Item 5',
      description: 'Description of the fifth gift item.',
      imgSrc: './assets/Product6.jpg',
      price: '$15',
    },
    {
      id: 6,
      name: 'Gift Item 5',
      description: 'Description of the fifth gift item.',
      imgSrc: './assets/Product7.jpg',
      price: '$15',
    },
  ];


  
  // // Open the login popup
  // const openLoginPopup = () => {
  //   setIsLoginPopupOpen(true);
  // };

  // // Close the login popup
  // const closeLoginPopup = () => {
  //   setIsLoginPopupOpen(false);
  // };

  //  // Handle logout
  //  const handleLogout = () => {
  //   setIsLoggedIn(false); // Set logged in state to false on logout
  // };

  return (
    <div className="App">    
    <Header/>

    {/* Customized button */}
    <CustomButton 
      title="Submit" 
      height="60px" 
      width="200px" 
      backgroundColor="#28a745"
      titleColor="white"
      borderRadius="10px"
      onClick={handleClick} 
    />

    
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
