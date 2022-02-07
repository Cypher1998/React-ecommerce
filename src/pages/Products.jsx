import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink, Link, useLocation } from 'react-router-dom';
import RealTimeProducts from '../components/RealTimeProducts';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';

const Products = () => {
  const location = useLocation();
  const { items } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState();
  const [filterText, setFilterText] = useState('');
  const [text, setText] = useState(items);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await axios.get(`store/${items}.json`);
      setData(response.data);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await axios.get(`store/${text}.json`);
      // window.history.replaceState(null, '', `${text}`);
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, [text]);

  let day = new Date().getHours();

  const getDay = () => {
    if (day === 0 || day < 12) {
      return (day = 'Morning');
    } else if (day === 12 || day < 17) {
      return (day = 'Afternoon');
    } else if (day === 17 || day < 24) {
      return (day = 'Evening');
    }
  };

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
        <div className="container">
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

          <div className="buttons">
            <div
              onClick={() => {
                setText('All-Products');
                setFilterText('');
              }}
            >
              <NavLink
                to="/All-Products"
                className={(navData) =>
                  navData.isActive ? 'active' : undefined
                }
              >
                <h3>All Products</h3>
              </NavLink>
            </div>
            <div
              onClick={() => {
                setText('airpods');
                setFilterText('');
              }}
            >
              <NavLink
                to="/airpods"
                className={(navData) =>
                  navData.isActive ? 'active' : undefined
                }
              >
                <h3>Airpods</h3>
              </NavLink>
            </div>
            <div
              onClick={() => {
                setText('bluetooths');
                setFilterText('');
              }}
            >
              <NavLink
                to="/bluetooths"
                className={(navData) =>
                  navData.isActive ? 'active' : undefined
                }
              >
                <h3>Bluetooths</h3>
              </NavLink>
            </div>
            <div
              onClick={() => {
                setText('chargers');
                setFilterText('');
              }}
            >
              <NavLink
                to="/chargers"
                className={(navData) =>
                  navData.isActive ? 'active' : undefined
                }
              >
                <h3>Chargers</h3>
              </NavLink>
            </div>
            <div
              onClick={() => {
                setText('headsets');
                setFilterText('');
              }}
            >
              <NavLink
                to="/headsets"
                className={(navData) =>
                  navData.isActive ? 'active' : undefined
                }
              >
                <h3>Headsets</h3>
              </NavLink>
            </div>
            <div
              onClick={() => {
                setText('Mens-Watches');
                setFilterText('');
              }}
            >
              <NavLink
                to="/Mens-Watches"
                className={(navData) =>
                  navData.isActive ? 'active' : undefined
                }
              >
                <h3>Mens Watch</h3>
              </NavLink>
            </div>
            <div
              onClick={() => {
                setText('powerbanks');
                setFilterText('');
              }}
            >
              <NavLink
                to="/powerbanks"
                className={(navData) =>
                  navData.isActive ? 'active' : undefined
                }
              >
                <h3>Powerbanks</h3>
              </NavLink>
            </div>
            <div
              onClick={() => {
                setText('Womens-Watches');
                setFilterText('');
              }}
            >
              <NavLink
                to="/Womens-Watches"
                className={(navData) =>
                  navData.isActive ? 'active' : undefined
                }
              >
                <h3>Womens Watch</h3>
              </NavLink>
            </div>
          </div>

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
        </div>
        <div className="container">
          <Link to="/" className="go-back">
            Go Back
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Products;
