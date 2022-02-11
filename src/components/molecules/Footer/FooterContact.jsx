import React from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import FooterContactItem from '../../atoms/FooterContactItem';

const FooterContact = () => (
  <div className="contact">
    <h3>Contacts</h3>
    <div>
      <FooterContactItem
        icon={<FaPhoneSquareAlt style={iconStyle} />}
        text="+123-456-7890"
      />
      <FooterContactItem
        icon={<MdOutlineMail style={iconStyle} />}
        text="example@email.com"
      />
    </div>
  </div>
);

const iconStyle = {
  width: '25px',
  height: '25px',
};

export default FooterContact;
