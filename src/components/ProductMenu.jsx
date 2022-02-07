import React from 'react';
import ProductMenuItem from './atoms/ProductMenuItem';
import { products } from '../utils/products';

const ProductMenu = ({setText, setFilterText}) => (
    <div className="buttons">
        {products.map(({title, url}) => (
            <ProductMenuItem
                title={title}
                setFilterText={setFilterText}
                setText={setText}
                href={url}
            />
        ))}
    </div>
);

export default ProductMenu;