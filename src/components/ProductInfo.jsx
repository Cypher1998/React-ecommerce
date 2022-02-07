import airpod from '../assets/airp.jpg';
import bluetooth from '../assets/bluet.jpg';
import charger from '../assets/charger.jpg';
import headset from '../assets/head1.jpg';
import mwatch from '../assets/watc2.jpg';
import powerbank from '../assets/pbank.jpg';
import wwatch from '../assets/wat2.jpg';
import allproducts from '../assets/page.jpeg';
import { Link } from 'react-router-dom';

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
        <button>
          <Link to="/All-Products">
            <img src={allproducts} alt="all products..." />
            <h4>all products</h4>
          </Link>
        </button>
        <button>
          <Link to="/airpods">
            <img src={airpod} alt="airpod.." />
            <h4>airpods</h4>
          </Link>
        </button>
        <button>
          <Link to="/bluetooths">
            <img src={bluetooth} alt="bluetooth.." />
            <h4>bluetooths</h4>
          </Link>
        </button>
        <button>
          <Link to="/chargers">
            <img src={charger} alt="charger.." />
            <h4>chargers</h4>
          </Link>
        </button>
        <button>
          <Link to="/headsets">
            <img src={headset} alt="headset.." />
            <h4>headsets</h4>
          </Link>
        </button>
        <button>
          <Link to="/Mens-Watches">
            <img src={mwatch} alt="mens watch.." />
            <h4>men's watches</h4>
          </Link>
        </button>
        <button>
          <Link to="/powerbanks">
            <img src={powerbank} alt="womens watch.." />
            <h4>powerbanks</h4>
          </Link>
        </button>
        <button>
          <Link to="/Womens-Watches">
            <img src={wwatch} alt="airpod.." />
            <h4>women's watches</h4>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ProductInfo;
