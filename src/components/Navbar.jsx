import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/brand.jpeg';

const Navbar = () => {
  return (
    <nav>
      <h2>
        <img src={logo} alt="logo" className="brand" />
        <Link to="/">DEMO-OWNERS</Link>
      </h2>
      <div>
        <FaShoppingCart size="30px" style={{ cursor: 'pointer' }} />
      </div>
    </nav>
  );
};

export default Navbar;
