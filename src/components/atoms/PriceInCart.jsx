const PriceInCart = ({
  discount,
  discountPrice,
  discountedPrice,
  newPrice,
}) => {
  return (
    <>
      {discount !== 'undefined' ? (
        <span>${discountPrice}</span>
      ) : (
        <span>${newPrice}</span>
      )}
      {discount && <span className="old-price">${newPrice}</span>}
      {discountedPrice !== 0 && (
        <span className="show-discounted-price">
          Savings: ${discountedPrice}
        </span>
      )}
    </>
  );
};

export default PriceInCart;
