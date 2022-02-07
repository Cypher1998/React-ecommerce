import React from 'react';
import Spinner from '../atoms/Spinner';
import RealTimeProducts from './RealTimeProducts';

const ProductBody = ({ loading, filterText, filteredItems, data, text }) => (
    <div className="items">
        <h2>{text}</h2>
        <div className={loading ? 'spinner' : 'no-spinner'}>
            {loading ? (
                <Spinner />
            ) : (
                <RealTimeProducts
                    products={filterText.length < 1 ? data : filteredItems}
                />
            )}
        </div>
    </div>
);

export default ProductBody;