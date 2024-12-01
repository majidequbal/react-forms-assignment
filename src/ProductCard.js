import React from "react";

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDetails() {
    return `${this.name} costs $${this.price}`;
  }
}

function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 h-100 d-flex flex-column gap-2 align-items-center justify-content-center bg-light">
      <h2>Product Details:</h2>
      <p>{product.getDetails()}</p>
    </div>
  );
}

export default ProductCard;
