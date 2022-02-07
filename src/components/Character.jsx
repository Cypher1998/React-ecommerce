import { FaShuttleVan, FaUserCheck } from 'react-icons/fa';
import { MdMoneyOff } from 'react-icons/md';

const Character = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>why buy from us?</h2>
        <div className="why-us">
          <div>
            <h3>
              <FaShuttleVan size={25} style={iconStyle} /> Fast Delivery
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur rerum minus adipisicing
              elit. Dignissimos rerum minus voluptatum placeat ullam.
            </p>
          </div>
          <div>
            <h3>
              <FaUserCheck size={25} style={iconStyle} /> Customer Satisfaction
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur rerum minus adipisicing
              elit. Dignissimos rerum minus voluptatum placeat ullam.
            </p>
          </div>
          <div>
            <h3>
              <MdMoneyOff size={25} style={iconStyle} /> Great Discounts
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur rerum minus adipisicing
              elit. Dignissimos rerum minus voluptatum placeat ullam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const iconStyle = {
  color: 'white',
  verticalAlign: 'middle',
};

export default Character;
