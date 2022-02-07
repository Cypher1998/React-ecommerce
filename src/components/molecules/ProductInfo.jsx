import { products } from '../../utils/products';
import ProductItem from '../atoms/ProductItem';

const ProductInfo = () => {
  return (
    <section className="categories">
      <div className="container info">
        <h1>Categories</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          tempora sequi. Tempore, hic consequuntur quidem dolorem consequatur
          quaerat nobis laboriosam.
        </p>
      </div>
      <div className="container sub-container">
        {products.map(({ image, title, url }) => (
            <ProductItem image={image} title={title} url={url}  />
        ))}
      </div>
    </section>
  );
};

export default ProductInfo;
