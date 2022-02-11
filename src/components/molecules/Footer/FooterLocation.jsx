import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const FooterLocation = () => (
  <div className="location">
    <h3>Location</h3>
    <section>
      <MdLocationOn style={iconStyle} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et
        molestiae voluptatem suscipit ullam non commodi voluptatum voluptate
        voluptatibus illo!
      </p>
    </section>
  </div>
);

const iconStyle = {
  width: '25px',
  height: '25px',
};

export default FooterLocation;
