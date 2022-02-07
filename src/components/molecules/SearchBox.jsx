import { useRef } from 'react';

const SearchBox = ({ term, searchKeyword }) => {
  const text = useRef();
  const getSearchTerm = () => {
    // console.log(e.target.value);
    searchKeyword(text.current.value);
  };

  return (
    <div className="search-container">
      <h5>
        Search through our store for an item via name or click on individual
        categories.
      </h5>
      <input
        ref={text}
        type="text"
        placeholder="Enter a text to search..."
        value={term}
        onChange={getSearchTerm}
      />
    </div>
  );
};

export default SearchBox;
