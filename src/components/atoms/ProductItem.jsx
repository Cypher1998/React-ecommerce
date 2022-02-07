import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ url, image, title }) => (
    <button>
        <Link to={url}>
            <img src={image} alt="all products..." />
            <h4>{title}</h4>
        </Link>
    </button>
);

export default ProductItem;