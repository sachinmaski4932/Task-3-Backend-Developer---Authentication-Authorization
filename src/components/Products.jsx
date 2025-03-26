
import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Phone" },
  ];

  return (
    <div className="container">
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
