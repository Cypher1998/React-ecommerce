import React from 'react';
import FooterContact from './FooterContact';
import FooterSocialMedia from './FooterSocialMedia';
import Container from '../../layout/Container';
import FooterLocation from './FooterLocation';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="details">
          <FooterLocation />
          <FooterContact />
          <FooterSocialMedia />
        </div>
        <h2>React ecommerce &copy; 2022</h2>
      </Container>
    </footer>
  );
};

export default Footer;
