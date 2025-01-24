import logo from '../Assets/logo.svg';
import '../Style/App.css';
import CustomButton from '../Controller/CustomButton';
import Header from '../Controller/Header';


function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };
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
  </div>
  );
}

export default App;
