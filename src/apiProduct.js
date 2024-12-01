import React, { useEffect, useState } from "react";
import axiosInstance from "./api/axiosInstance";
import { Table, Button } from "react-bootstrap";

const ApiProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products");
      setProducts(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Add a new product
  const addProduct = async () => {
    try {
      const newProduct = { name: "Tablet", price: 299.99 };
      await axiosInstance.post("/products", newProduct);
      fetchProducts(); // Refresh products
    } catch (err) {
      setError(err.message);
    }
  };

  // Update a product
  const updateProduct = async (id) => {
    try {
      const updatedProduct = { name: "Updated Laptop", price: 1099.99 };
      await axiosInstance.put(`/products/${id}`, updatedProduct);
      fetchProducts(); // Refresh products
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      fetchProducts(); // Refresh products
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="d-flex flex-column h-100 gap-3">
      <h5 className="m-0">Product List</h5>
      <div className="overflow-auto p-4 bg-light" style={{ height: "200px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Table bordered responsive>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ width: "100%" }}>
                {" "}
                {product.name} - ${product.price.toFixed(2)}
              </td>

              <td>
                <div className="d-flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => updateProduct(product.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
      <Button onClick={addProduct}>Add Product</Button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ApiProduct;
