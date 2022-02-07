import './App.css';
import Navbar from './components/molecules/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDisplay from './pages/ProductDisplay';
import Footer from './components/molecules/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:items" element={<Products />} />
          <Route path="/:items/:item" element={<ProductDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
