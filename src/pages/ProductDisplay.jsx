import { useState, useEffect, useMemo, useRef } from 'react';
import CustomerView from '../components/atoms/CustomerView';
import { DUMMY_TEXT } from '../utils/constants';
import { getRandomProducts } from '../utils/randomNumber';
import Spinner from '../components/atoms/Spinner';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCartPlus, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProductDisplay = ({ cartNum, setCartNum }) => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [number, setNumber] = useState(1);
  const [load, setLoad] = useState(false);
  const { item } = useParams();
  const navigate = useNavigate();
  const id = Number(item);
  const isMounted = useRef(true);
  const getData = useRef();

  getData.current = async () => {
    const response = await fetch('/store/All-Products.json');
    const data = await response.json();

    setProducts(data);
    const newProduct = data.find((product) => product.id === id);

    if (newProduct !== undefined) {
      setProduct(newProduct);
    }
  };

  useEffect(() => {
    if (isMounted) {
      getData.current();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      getData.current();
    }
    return () => {
      isMounted.current = false;
    };
  }, [id]);

  const getRandomProduct = useMemo(
    () => getRandomProducts(products, 8),
    [products]
  );

  const addItemToCart = () => {
    setLoad(true);
    const newProduct = { ...product, quantity: Number(number) };

    cartNum.push(newProduct);

    const result = Array.from(new Set(cartNum.map((s) => s.id))).map((id) => {
      return {
        id: id,

        quantity: cartNum
          .filter((s) => s.id === id)
          .map((product) => product.quantity)
          .reduce((total, current) => total + current, 0),

        name: cartNum
          .filter((s) => s.id === id)
          .map((product) => product.name)
          .pop(),

        description: cartNum
          .filter((s) => s.id === id)
          .map((product) => product.description)
          .pop(),

        price: cartNum
          .filter((s) => s.id === id)
          .map((product) => product.price)
          .pop(),

        discount: cartNum
          .filter((s) => s.id === id)
          .map((product) => product.discount)
          .pop(),

        image_url: cartNum
          .filter((s) => s.id === id)
          .map((product) => product.image_url)
          .pop(),
      };
    });

    setCartNum(result);

    toast.success(`${number} ${product.name} added to cart`);
    setTimeout(() => {
      setLoad(false);
    }, 3000);

    setNumber(1);
  };

  if (product === null) {
    return (
      <div className="product-spinner">
        <Spinner />
      </div>
    );
  } else {
    const { name, price, discount, description, image_url } = product;

    const calculatedPrice = price - (discount / 100) * price;
    const newPrice = calculatedPrice.toFixed(2);

    return (
      <main>
        <section className="container product-page">
          <div className="product-page-display">
            <div className="image">
              <img src={image_url} alt="product" />
            </div>
            <div className="name">
              <p>{name}</p>
            </div>
            <div className="price">
              {discount ? <h3>${newPrice}</h3> : <h3>${price}</h3>}
              {discount && <h4>${price}</h4>}
              {discount && <p>%{discount}</p>}
            </div>
            <div className="description">
              <h3>Description</h3>
              <p>
                {description} {DUMMY_TEXT}
              </p>
            </div>
          </div>
          <h3 className="customers-title">Customers also viewed</h3>
          <div className="customers-view">
            {getRandomProduct.map((product, index) => (
              <div key={index}>
                <CustomerView product={product} />
              </div>
            ))}
          </div>
          <div className="add-btn">
            {load ? (
              <div className="add-cart-spinner">
                <FaSpinner size={30} />
              </div>
            ) : (
              <>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />

                <button className="button" onClick={addItemToCart}>
                  <FaCartPlus size={22} />
                  <p>Add To Cart</p>
                </button>
              </>
            )}
          </div>

          <button className="go-back" onClick={() => navigate('/All-Products')}>
            Go Back
          </button>
        </section>
      </main>
    );
  }
};
export default ProductDisplay;
