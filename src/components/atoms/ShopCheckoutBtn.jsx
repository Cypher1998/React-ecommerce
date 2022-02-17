import { useNavigate } from 'react-router-dom';

const ShopCheckoutBtn = ({ cartProducts }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="cart-go-back"
        onClick={() => navigate('/All-Products')}
      >
        continue shopping
      </button>
      {cartProducts.length !== 0 && (
        <button className="cart-checkout" onClick={() => console.log(22)}>
          proceed to checkout
        </button>
      )}
      {cartProducts.length === 0 && (
        <button
          className="cart-checkout disabled"
          style={BorderColor}
          onClick={() => console.log(22)}
          disabled
        >
          proceed to checkout
        </button>
      )}
    </>
  );
};

const BorderColor = {
  borderColor: 'gray',
};

export default ShopCheckoutBtn;
