import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/brand.jpeg';

const Navbar = ({ cartNumber }) => {
  const navigate = useNavigate();

  const quantity = cartNumber.reduce((total, cart) => {
    return total + cart.quantity;
  }, 0);

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <nav>
      <h2>
        <img src={logo} alt="logo" className="brand" />
        <Link to="/">DEMO-OWNERS</Link>
      </h2>
      <div
        style={{ position: 'relative', cursor: 'pointer' }}
        onClick={goToCart}
      >
        <FaShoppingCart size="30px" />
        {cartNumber.length > 0 && (
          <span className="cart-number">{quantity}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
