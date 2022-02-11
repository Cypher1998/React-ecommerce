import React from 'react';
import Container from '../layout/Container';
import { FaShuttleVan, FaUserCheck } from 'react-icons/fa';
import { MdMoneyOff } from 'react-icons/md';
import Box from '../atoms/Box';
import { DUMMY_TEXT } from '../../utils/constants';

const Character = () => {
  return (
    <section className="about-us">
      <Container>
        <h2>why buy from us?</h2>
        <div className="why-us">
          <Box
            icon={<FaShuttleVan size={25} style={iconStyle} />}
            header="Fast Delivery"
            text={DUMMY_TEXT}
          />
          <Box
            icon={<FaUserCheck size={25} style={iconStyle} />}
            header="Customer Satisfaction"
            text={DUMMY_TEXT}
          />
          <Box
            icon={<MdMoneyOff size={25} style={iconStyle} />}
            header="Great Discounts"
            text={DUMMY_TEXT}
          />
        </div>
      </Container>
    </section>
  );
};

const iconStyle = {
  color: 'white',
  verticalAlign: 'middle',
};

export default Character;
