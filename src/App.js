import './App.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
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

  const removeItemFromCart = (id) => {
    if (window.confirm('Do you want to really remove this item from cart?')) {
      const newCart = cartNum.filter((cart) => cart.id !== id);

      setCartNum(newCart);

      toast.success('Product has been removed from cart');
    }
  };

  const decreaseQty = (id) => {
    cartNum.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1;

        product.quantity = newQuantity;

        const newCart = [...cartNum];

        setCartNum(newCart);

        toast.success('Item quantity has been updated');
      }
      return cartNum;
    });
  };

  const increaseQty = (id) => {
    cartNum.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity + 1;

        product.quantity = newQuantity;

        const newCart = [...cartNum];

        setCartNum(newCart);

        toast.success('Item quantity has been updated');
      }
      return cartNum;
    });
  };

  return (
    <>
      <Router>
        <Navbar cartNumber={cartNum} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:items" element={<Products />} />
          <Route
            path="/products/:item"
            element={
              <ProductDisplay cartNum={cartNum} setCartNum={setCartNum} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartNum}
                removeItem={removeItemFromCart}
                decreaseQty={decreaseQty}
                increaseQty={increaseQty}
              />
            }
          />
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
