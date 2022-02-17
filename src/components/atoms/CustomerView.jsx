import { useNavigate } from 'react-router-dom';

const CustomerView = ({ product }) => {
  // console.log(product);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/products/${product.id}`);
    // window.location.reload();
  };

  return (
    <>
      <article onClick={onClick}>
        <img src={product.image_url} alt="customer-display" />
        <p>{product.name}</p>
        <span>${product.price}</span>
      </article>
    </>
  );
};
export default CustomerView;
