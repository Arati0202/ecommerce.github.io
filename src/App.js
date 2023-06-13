
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
//import {Routes , Route} from 'react-router-dom';
import Products from './Components/Products';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Product from './Components/Product';
import Registration from './Components/Registration';
import Login from './Components/Login';

function App() {
  return (
   
      <>
      
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route exact path='/Products' element={<Products />} ></Route>
        <Route exact path='/Products/:id' element={<Product />} ></Route>
        <Route exact path='/Login' element = {<Login />}></Route>
        <Route exact path='/Registration' element = {<Registration />}></Route>
      </Routes>
      
      </>
      
    
  );
}

export default App;
