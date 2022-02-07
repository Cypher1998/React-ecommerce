import { MdLocationOn, MdOutlineMail } from 'react-icons/md';
import {
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedin,
  FaSlack,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="details">
          <div className="location">
            <h3>Location</h3>
            <section>
              <MdLocationOn style={iconStyle} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam et molestiae voluptatem suscipit ullam non commodi
                voluptatum voluptate voluptatibus illo!
              </p>
            </section>
          </div>
          <div className="contact">
            <h3>Contacts</h3>
            <div>
              <section>
                <FaPhoneSquareAlt style={iconStyle} />
                <p>+123-456-7890</p>
              </section>
              <section>
                <MdOutlineMail style={iconStyle} />
                <p>example@email.com</p>
              </section>
            </div>
          </div>
          <div className="social-media">
            <a href="https://www.github.com">
              <FaGithub style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin style={iconStyle} />
            </a>
            <a href="https://www.slack.com">
              <FaSlack style={iconStyle} />
            </a>
          </div>
        </div>
        <h2>React ecommerce &copy; 2022</h2>
      </div>
    </footer>
  );
};

const iconStyle = {
  width: '25px',
  height: '25px',
};

export default Footer;
