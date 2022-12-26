
import './App.css';
import image from './shopping.jpg';
import imageTwo from './grocery.jpg';
import GroceryList from './GroceryList';




function App() {
  return (
    <div className='App'>
    <div className="container"> <img src= {image} width="300px" alt='shopping'/> </div>
    <div className="container">   <h1> Grocery List</h1> </div>
  <GroceryList/>
  <div className="container"> <img src= {imageTwo} width="250px" alt='grocery'/></div>
      
      
    </div>
  );
}

export default App;
