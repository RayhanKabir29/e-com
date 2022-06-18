import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import Home from "../Home";
import Products from "../Products/Products";

const Login = () => {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    let email = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    if (!email || !pass) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordLog !== pass || emailLog !== email) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  };
  return (
    <>
      <Container>
        {home ? (
          <form onSubmit={handleLogin}>
            <h3>LogIn</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmailLog(e.target.value)}
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

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Login
            </button>
            {flag && (
              <Alert color="primary" variant="danger">
                Your Email or Password is incorrect!
              </Alert>
            )}
          </form>
        ) : (
          <Products />
        )}
      </Container>
    </>
  );
};

export default Login;
