import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatText } from '../../utils/formatText';

const ProductMenuItem = ({setFilterText, setText, href, title}) => {
    const onClick = (text) => {
        setText(formatText(text));
        setFilterText('')
    };
    return (
        <div onClick={() => onClick(href)}>
            <NavLink to={href} className={(navData) => navData.isActive ? 'active' : undefined}>
                <h3>{title}</h3>
            </NavLink>
        </div>
    )
};

export default ProductMenuItem;