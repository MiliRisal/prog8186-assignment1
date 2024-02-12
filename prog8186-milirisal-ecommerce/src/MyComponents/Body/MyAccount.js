import React, { useState, useEffect } from "react";
import "./MyAccount.css";
import { Button, Container, Form } from "react-bootstrap";

export const MyAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState(() => {
    const savedData = localStorage.getItem("submittedData");
    return savedData ? JSON.parse(savedData) : null;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!!");
    setSubmittedData(formData);
    localStorage.setItem("submittedData", JSON.stringify(formData));
    setFormData({
      fullName: "",
      email: "",
      number: "",
      address: "",
    });
  };

  useEffect(() => {
    const savedData = localStorage.getItem("submittedData");
    if (savedData) {
      setSubmittedData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div>
      {submittedData ? (
        <div style={{ marginLeft: "550px", marginTop: "50px" }}>
          <h2>Your Information</h2>
          <p>Full name: {submittedData.fullName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone number: {submittedData.number}</p>
          <p>Shipping Address: {submittedData.address}</p>
        </div>
      ) : (
        <p>No Profile Data</p>
      )}
      <h3 style={{ marginLeft: "550px", marginTop: "50px" }}>
        Enter your information
      </h3>
      <div className="formContainer">
        <Container>
          <form onSubmit={handleSubmit}>
            <div className="formItem">
              <label>Full Name:</label> <br />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formItem">
              <label>Email:</label> <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formItem">
              <label>Contant Number:</label> <br />
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formItem">
              <label>Shipping Address: </label> <br />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formItem">
              <button type="submit">Login</button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};
