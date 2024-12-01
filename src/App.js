import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import ProductCard from "./ProductCard";
// import ProductCard2 from "./ProductCard2";
// import ProductCard3 from "./ProductCard3";
import Product from "./Product";
// import CompoProduct from "./CompoProduct";
// import ApiProduct from "./apiProduct";
// import FormWithValidation from "./api/FormWithValidation";
import RegistrationForm from "./RegistrationForm";

function App() {
  const product = new Product("Laptop", 10000);
  return (
    <Container
      className="w-100 h-100 bg-light d-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "100%" }}
    >
      {/* <ProductCard name="Laptop" price="1099" />
      <ProductCard name="Smartphone" price="800" />
      <ProductCard name="Headphones" price="150" />
      <ProductCard name="WritePad" price="10" /> */}

      {/* <ProductCard2 name="Mouse" price={10} /> */}
      {/* <Row className="d-none">
        <Col md={6}>
          <ProductCard product={product} />
        </Col>
        <Col md={6}>
          <ApiProduct />
        </Col>
      </Row> */}

      {/* <ProductCard3   price={10}/> */}

      {/* <FormWithValidation /> */}
      <Row className="justify-content-center w-100">
        <Col md={5}>
          <RegistrationForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
