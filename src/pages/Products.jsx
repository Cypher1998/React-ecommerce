import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, Link, useLocation } from 'react-router-dom';
import ProductMenu from '../components/ProductMenu';
import ProductHeader from '../components/ProductHeader';
import ProductBody from '../components/ProductBody';
import Container from '../components/layout/Container';

const Products = () => {
  const location = useLocation();
  const { items } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState();
  const [filterText, setFilterText] = useState('');
  const [text, setText] = useState(items);

  const fetchData = useRef();
  const fetchDataWithText = useRef();

  fetchData.current = async () => {
    const response = await axios.get(`store/${items}.json`);
    setData(response.data);
    setLoading(false);
  };

  fetchDataWithText.current = async () => {
    const response = await axios.get(`store/${text}.json`);
    // window.history.replaceState(null, '', `${text}`);
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData.current();
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchDataWithText.current();
  }, [text]);

  const handleFilter = (textInput) => {
    setFilterText(textInput);

    if (textInput !== '') {
      const newProducts = data.filter((product) => {
        return Object.values(product.name)
          .join('')
          .toLowerCase()
          .includes(textInput.toLowerCase());
      });
      setFilteredItems(newProducts);
    } else {
      setFilteredItems(data);
    }
  };

  return (
    <main>
      <section className="display-items">
        <Container>
          <ProductHeader handleFilter={handleFilter} filterText={filterText} location={location} />
          <ProductMenu setText={setText} setFilterText={setFilterText} />
          <ProductBody loading={loading} text={text} data={data} filterText={filterText} filteredItems={filteredItems} />
        </Container>
        <Container>
          <Link to="/" className="go-back">
            Go Back
          </Link>
        </Container>
      </section>
    </main>
  );
};

export default Products;
