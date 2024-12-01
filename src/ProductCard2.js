import React from "react";
import PropTypes from "prop-types";

function ProductCard2({ name, price, isAvailable }) {
  // Conditional styling for availability
  const productStyle = {
    color: isAvailable ? "black" : "red",
    border: isAvailable ? "1px solid #ccc" : "2px solid #ccc",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div style={productStyle}>
      <h2>Product Name ddd : {name}</h2>
      <p>Price ddd : ${price}</p>
      <p>Status ddd: {isAvailable ? "Available" : "Out of Stock"}</p>
    </div>
  );
}

// Adding PropTypes
ProductCard2.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default ProductCard2;
