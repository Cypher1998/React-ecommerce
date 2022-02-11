import './App.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/molecules/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDisplay from './pages/ProductDisplay';
import Footer from './components/molecules/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [cartNum, setCartNum] = useState([]);

  return (
    <>
      <Router>
        <Navbar cartNumber={cartNum} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:items" element={<Products />} />
          <Route
            path="/:items/:item"
            element={
              <ProductDisplay cartNum={cartNum} setCartNum={setCartNum} />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        autoClose={2000}
        position="top-left"
        pauseOnHover={false}
        limit={1}
      />
    </>
  );
}

export default App;
