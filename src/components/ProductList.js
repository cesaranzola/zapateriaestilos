import React from 'react';
import products from './products.json';

function ProductList() {
  return (
    <div className="container">
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
