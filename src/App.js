import './App.css';
import {Nav } from 'react-bootstrap';
import Home from './Component/Home/home';
import Navs from './Component/Nav/Nav';
function App() {
  return (
    <div className="App">
      <Navs/>
      <Home/> 
    </div>
  );
}

export default App;