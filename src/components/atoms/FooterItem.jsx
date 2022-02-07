import React from 'react';

const FooterItem = ({ href, icon }) => (
    <a href={href}>
        {icon}
    </a>
);

export default FooterItem;