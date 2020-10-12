import React from 'react';
//import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import ProductIndex from './Components/ProductIndex';
import ProductDetails from './Components/ProductDetails';
import NotFound from './Components/NotFound';

function App() {
  return(
    <Router>
      <nav>
      <Link to="/">Home</Link> |{' '}
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
             <Route path="/" element={<ProductIndex />} />
             <Route path=":productID" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
