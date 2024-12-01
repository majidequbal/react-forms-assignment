import React from "react";
import { useForm } from "react-hook-form";
import { Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-light shadow rounded p-5 border">
      <h6 className="mb-4 text-muted text-uppercase">Registration Form</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FloatingLabel controlId="floatingName" label="Name*" className="mb-3">
          <Form.Control
            type="text"
            name="name"
            className={errors.name && "is-invalid"}
            placeholder="Name*"
            id="name"
            {...register("name", { required: "Name is required" })}
          />

          {errors.name && (
            <Form.Control.Feedback type="invalid">
              {errors.name.message}
            </Form.Control.Feedback>
          )}
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingEmail"
          label="Email*"
          className="mb-3"
        >
          <Form.Control
            id="email"
            type="email"
            className={errors.email && "is-invalid"}
            placeholder="Email*"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <Form.Control.Feedback type="invalid">
              {errors.email.message}
            </Form.Control.Feedback>
          )}
        </FloatingLabel>
        <Row>
          <Col xs={6}>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password*"
              className="mb-3"
            >
              <Form.Control
                type="password"
                className={errors.password && "is-invalid"}
                placeholder="Password*"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password.message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Col>
          <Col xs={6}>
            <FloatingLabel
              controlId="floatingPassword"
              label="ConfirmPassword*"
              className="mb-3"
            >
              <Form.Control
                type="password"
                id="confirmPassword"
                className={errors.confirmPassword && "is-invalid"}
                placeholder="ConfirmPassword*"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
              />
              {errors.confirmPassword && (
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword.message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Col>
        </Row>

        <Button size="lg" variant="primary w-100" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
