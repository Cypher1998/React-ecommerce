import { MdDelete } from 'react-icons/md';
import Container from '../components/layout/Container';
import PriceInCart from '../components/atoms/PriceInCart';
import { Link } from 'react-router-dom';
import Quantity from '../components/atoms/Quantity';
import ShopCheckoutBtn from '../components/atoms/ShopCheckoutBtn';

const Cart = ({ cartProducts, removeItem, decreaseQty, increaseQty }) => {
  cartProducts.map((product) => {
    const newPrice = product.quantity * product.price;

    product.newPrice = newPrice;

    const calcPrice = ((product.discount / 100) * product.newPrice).toFixed(2);

    product.discountedPrice = Number(calcPrice) || 0;

    const discountPrice = product.newPrice - product.discountedPrice;

    product.discountPrice = discountPrice;

    return cartProducts;
  });

  const handleDelete = (id) => {
    removeItem(id);
  };

  const total = cartProducts.reduce((total, product) => {
    return total + product.newPrice - product.discountedPrice;
  }, 0);

  if (cartProducts.length === 0) {
    return (
      <Container>
        <main>
          <section className="cart-display">
            <h3>my cart (0 items)</h3>
            <div className="buttons">
              <ShopCheckoutBtn cartProducts={cartProducts} />
            </div>
            <div className="total">
              <h3>total</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
          </section>
        </main>
      </Container>
    );
  } else {
    const total = cartProducts.reduce((total, product) => {
      return total + product.newPrice - product.discountedPrice;
    }, 0);

    return (
      <Container>
        <main>
          <section className="cart-display">
            <h3>my cart ({cartProducts.length} items)</h3>

            {cartProducts.map((product) => {
              const {
                id,
                name,
                discount,
                image_url,
                quantity,
                newPrice,
                discountPrice,
                discountedPrice,
              } = product;

              return (
                <div key={id} className="cart-details">
                  <div className="cart-image">
                    <Link to={`/products/${id}`}>
                      <img src={image_url} alt="product..." />
                    </Link>
                  </div>

                  <div className="cart-name">
                    <p>{name}</p>
                  </div>

                  <div className="cart-quantity">
                    <Quantity
                      id={id}
                      quantity={quantity}
                      increaseQty={increaseQty}
                      decreaseQty={decreaseQty}
                    />
                  </div>

                  <div className="cart-price">
                    <PriceInCart
                      discount={discount}
                      discountPrice={discountPrice}
                      discountedPrice={discountedPrice}
                      newPrice={newPrice}
                    />
                  </div>

                  <div className="cart-button">
                    <button type="button" onClick={() => handleDelete(id)}>
                      <MdDelete style={{ marginRight: '5px' }} size={18} />
                      REMOVE
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="total">
              <h3>total</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>

            <div className="buttons">
              <ShopCheckoutBtn cartProducts={cartProducts} />
            </div>
          </section>
        </main>
      </Container>
    );
  }
};

export default Cart;
