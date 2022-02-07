import { useState, useEffect } from 'react';
import { products } from '../assets/AllProducts';
import Spinner from '../components/atoms/Spinner';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const ProductDisplay = () => {
  const [product, setProduct] = useState(null);
  const { items, item } = useParams();
  const navigate = useNavigate();
  const id = Number(item);

  const getProduct = () => {
    const newProduct = products.find((product) => product.id === id);
    return newProduct;
  };

  useEffect(() => {
    setProduct(getProduct());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product === null) {
    return <Spinner />;
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
                {description} Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Itaque rem error assumenda a quis nesciunt ratione est
                earum in eius.
              </p>
            </div>
          </div>
          <div className="add-btn">
            <button>
              <FaCartPlus size={22} />
              <p>Add To Cart</p>
            </button>
          </div>
          <button className="go-back" onClick={() => navigate(`/${items}`)}>
            back to {items}
          </button>
        </section>
      </main>
    );
  }
};
export default ProductDisplay;
