import React, { useState, useEffect } from "react";
import classes from "./SignIn.module.css";
import { useNavigate } from 'react-router-dom';
import Validation from "../../validation/Validation";

const SignInForm = (props) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // new state variable
  const navigate = useNavigate();

  useEffect(() => {
    if (error === null) {
      setusername("");
      setPassword("");
    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("Please enter a username and password");
      return;
    }
    setError(null);

    try {
      const response = await fetch("http://localhost:8081/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            console.log(data.token);
            if (data.token) {
              sessionStorage.setItem("token", JSON.stringify(data.token));
              // sessionStorage.setItem("role", JSON.stringify(data.roleName));
              // sessionStorage.setItem("username", JSON.stringify(data.user));
              navigate("/Dashboard");
            }
          }
        });
    } catch (err) {
      setError(err.message);
    }
    setError("Invalid username or password");
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formField}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className={classes.formField}>
        <label htmlFor="username" className={classes.formFieldLabel}>username:</label>
        <input className={classes.formFieldInput}
          type="text"
          id="username"
          value={username}
          onChange={(event) => setusername(event.target.value)}
        />
      </div>
      <div className={classes.formField}>
        <label htmlFor="password" className={classes.formFieldLabel}>Password:</label>
        <input className={classes.formFieldInput}
          type={showPassword ? "text" : "password"} // toggle input type
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}

        />
        
        {/* <input type="checkbox" onClick={handleTogglePassword}></input> */}
        <button type="button" onClick={handleTogglePassword} className="eyeButton">
          {showPassword ? <i class="fa fa-eye" aria-hidden="true" ></i> : <i class="fa fa-eye-slash" aria-hidden="true"></i>}
        </button>
      </div>
      <button className={classes.formFieldButton} type="submit" disabled={loading}>
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;

