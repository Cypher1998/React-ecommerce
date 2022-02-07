import React from 'react';
import { FaGithub, FaLinkedin, FaSlack } from 'react-icons/fa';
import FooterItem from '../../atoms/FooterItem';

const FooterSocialMedia = () => (
    <div className="social-media">
        <FooterItem icon={<FaGithub style={iconStyle} />} href='https://www.github.com' />
        <FooterItem icon={<FaLinkedin style={iconStyle} />} href='https://www.linkedin.com' />
        <FooterItem icon={<FaSlack style={iconStyle} />} href='https://www.slack.com' />
    </div>
);

const iconStyle = {
    width: '25px',
    height: '25px',
};

export default FooterSocialMedia;