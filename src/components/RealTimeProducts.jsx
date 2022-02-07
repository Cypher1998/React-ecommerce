import Product from './Product';

const RealTimeProducts = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        const { id } = product;
        return <Product key={id} product={product} />;
      })}
    </>
  );
};

export default RealTimeProducts;
