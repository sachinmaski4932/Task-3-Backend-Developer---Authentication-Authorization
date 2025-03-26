import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";


const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h2>Product Details</h2>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
