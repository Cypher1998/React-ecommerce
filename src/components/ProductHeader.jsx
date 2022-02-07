import React from 'react';
import { getDay } from '../utils/day';
import SearchBox from './SearchBox';

const ProductHeader = ({ location, filterText, handleFilter }) => (
    <div className="information">
        <h4>
            Good <span>{getDay()} </span>
            Customer, you can toggle around the categories below to select
            your preferrences from our store. Thanks...
        </h4>
        {location.pathname === '/All-Products' && (
            <SearchBox term={filterText} searchKeyword={handleFilter} />
        )}
    </div>
);

export default ProductHeader;