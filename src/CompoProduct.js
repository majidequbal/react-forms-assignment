import React from "react";

function CompoProduct({ product }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h2>Product Details:</h2>
      <p>{product.getDetails()}</p>
    </div>
  );
}

export default CompoProduct;
