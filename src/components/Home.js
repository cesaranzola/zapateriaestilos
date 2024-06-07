import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-half men">
          <Link to="/men-shoes" className="banner-link">
            <h2>Hombre</h2>
          </Link>
        </div>
        <div className="banner-half women">
          <Link to="/women-shoes" className="banner-link">
            <h2>Mujer</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
