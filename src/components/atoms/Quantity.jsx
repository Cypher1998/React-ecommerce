const Quantity = ({ id, quantity, increaseQty, decreaseQty }) => {
  const handleIncrease = (id) => {
    increaseQty(id);
  };
  const handleDecrease = (id) => {
    decreaseQty(id);
  };

  return (
    <>
      <button
        onClick={() => handleDecrease(id)}
        disabled={quantity === 1}
        className={quantity === 1 ? 'disabled' : undefined}
      >
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => handleIncrease(id)}>+</button>
    </>
  );
};

export default Quantity;
