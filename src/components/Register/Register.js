import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved in local Storage");
      setLogin(!login);
    }
    // const handleLogin = () => {
    //   setLogin(!login);
    // };
  };
  return (
    <>
      <Container>
        {login ? (
          <form
            onSubmit={handleRegister}
            className="shadow p-3 mb-5 bg-white rounded mt-3 register-form"
          >
            <h3 className="text-center">Register</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone No.</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="submit" className="register-btn">
              Register
            </button>
            <p className="text-center text-danger">
              Already Register?{" "}
              <span>
                <Link to="/login">Log in</Link>
              </span>
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </Container>
    </>
  );
};

export default Register;
