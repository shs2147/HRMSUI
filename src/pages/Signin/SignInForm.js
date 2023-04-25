// import React, {useState}from "react";
import classes from "./SignIn.module.css";
import { useNavigate } from 'react-router-dom';
// //import SignIn from "./SignIn";
import Validation from "../../validation/Validation";
import React, { useState, useEffect } from "react";

const SignInForm = (props) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (error === null) {
      // Refresh the input fields after the first successful login
      setUsername("");
      setPassword("");
    }
  }, [error]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform authentication logic here
  //   console.log(`Username: ${userName} Password: ${password}`);
  // };


  const handleSubmit = async (event) => {
    //const res = await client.post("/sign-in", {userName, password});
    event.preventDefault();
    if (!userName || !password) {
      setError("Please enter a username and password");
      return;
    } 


    //setLoading(true);
    setError(null);

    try {
      // Perform authentication logic here, e.g. by calling an API
      const response = await fetch("http://localhost:8080/usermaster/authenticate", {
        method: "POST",
        body: JSON.stringify({ userName, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('data', data)
          if (data) {
            console.log(data.token);
            if (data.token) {
              sessionStorage.setItem("token", JSON.stringify(data.token));
              sessionStorage.setItem("role", JSON.stringify(data.roleName));
              sessionStorage.setItem("userName", JSON.stringify(data.user));
              navigate("/Dashboard");
            }
          
         
        }
        });
    } catch (err) {
      setError(err.message);
    }
    setError("Invalid username or password");


   
  };

  

  return (
    <form onSubmit={handleSubmit} className={classes.formField}>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className={classes.formField}>
        <label htmlFor="username" className={classes.formFieldLabel}>Username:</label>
        <input className={classes.formFieldInput}
          type="text"
          id="username"
          value={userName}
          onChange={(event) => setUsername(event.target.value)}
          
        />
      </div>
      <div className={classes.formField}>
        <label htmlFor="password" className={classes.formFieldLabel}>Password:</label>
        <input className={classes.formFieldInput}
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className={classes.formFieldButton} type="submit" disabled={loading}>
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;

