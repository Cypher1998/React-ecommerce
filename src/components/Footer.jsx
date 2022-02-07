import { MdLocationOn, MdOutlineMail } from 'react-icons/md';
import {
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedin,
  FaSlack,
} from 'react-icons/fa';
import FooterItem from './atoms/FooterItem';
import React from 'react';

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
            <FooterItem icon={<FaGithub style={iconStyle} />} href='https://www.github.com' />
            <FooterItem icon={<FaLinkedin style={iconStyle} />} href='https://www.linkedin.com' />
            <FooterItem icon={<FaSlack style={iconStyle} />} href='https://www.slack.com' />
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
