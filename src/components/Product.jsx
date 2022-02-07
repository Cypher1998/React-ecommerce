import { Link, useLocation } from 'react-router-dom';

const Product = ({ product }) => {
  const { pathname } = useLocation();

  const { id, name, price, discount, image_url } = product;

  const calculatedPrice = price - (discount / 100) * price;
  const newPrice = calculatedPrice.toFixed(2);

  return (
    <>
      <article className="one-item">
        <Link to={`${pathname}/${id}`}>
          <img src={image_url} alt="item..." />
          {discount && <span>{discount}%</span>}
          <p>{name}</p>
          {discount ? <h4>${newPrice}</h4> : <h4>${price}</h4>}
        </Link>
      </article>
    </>
  );
};

export default Product;
