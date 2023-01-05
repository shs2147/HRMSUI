import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import ahom from "../Signin/ahom.mp4";
import classes from "./SignIn.module.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function SignIn(props) {
  const [loggedIn, SetLoggedIn] = useState(false);
  const [dataInput, setDataInput] = useState({});
  const navigate = useNavigate();
  const handlerInput = (val) => {
    setDataInput(val);
  };
  // const logInHandler =async(e)=>{
  //   // e.preventDefault();

  //   console.log(JSON.stringify(dataInput))
  //   await fetch('http://localhost:8080/usermaster/authenticate', {
  //     method:"POST",
  //     headers:{"content-Type": "application/json", "Accept": "application/json"},
  //     body:JSON.stringify(dataInput)
  //  }).then(res=>res.json().then(body=>
  //   {sessionStorage.setItem('token', JSON.stringify(body.jwtToken))

  // })).then(()=>{
  //     //  const token = res.data.token;
  //     //  localStorage.setItem('token', token);
  //     console.log("token Accepted")
  //  }).catch(err => {
  //      console.log(err);
  //   });

  // }

  const logInHandler = async (e) => {
    // e.preventDefault();

    console.log(JSON.stringify(dataInput));
    await fetch("http://localhost:8080/usermaster/authenticate", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data.jwtToken);
          if (data.jwtToken) {
            sessionStorage.setItem("token", JSON.stringify(data.jwtToken));
            navigate("/Dashboard");
          }
        }
      })
      .catch((err) => console.log(err));
  };
  const token = localStorage.getItem("token");
  // const Jwt =require('jsonwebtoken');
  // const jwtKey = 'admin';

  return (
    <div>
      {/* <div> */}
      {/* <nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
  <a className="navbar-brand" href="/">Ahom Technology</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">Home</a>
      </li>
     
      
    </ul>
  </div>
</div>
</nav> */}
      <div className="App">
        {/* </div> */}
        <div className={classes.appForm}>
          {/* <div className={classes.pageSwitcher}>
            <NavLink
       
              
              className={classes.pageSwitcherItem}
              onClick={()=>{SetLoggedIn(true)}}
            >
              Sign In
            </NavLink>
            <NavLink
              exact
           
              className={classes.pageSwitcherItem}
              onClick={()=>{SetLoggedIn(false)}}
            >
              Sign Up
            </NavLink>
          </div> */}

          <div className={classes.formTitle}>
            <p className={classes.formTitleLink} onClick={logInHandler}>
              Sign In
            </p>{" "}
            {/* or{" "}
            <p
              exact
              className={classes.formTitleLink}
              onClick={()=>{SetLoggedIn(false)}}
            >
              Sign Up
            </p> */}
          </div>
          {
            <SignInForm
              onClick={logInHandler}
              handlerInput={handlerInput}
              handler={props.handler}
            />
          }

          {/* {!loggedIn && <SignUpForm/>}          */}
          
           

        </div>
       
      </div>
    </div>
  );
}

export default SignIn;
