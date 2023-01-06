import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from './SignIn.module.css';
class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handler(this.state);
    this.props.handlerInput(this.state);
    this.props.onClick()
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className={classes.formCenter}>
        <form className={classes.formField} onSubmit={this.handleSubmit}>
          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="userName">
            userName
            </label>
            <input
              type="text"
              id="userName"
              className={classes.formFieldInput}
              placeholder="Enter Your UserName"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </div>

          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={classes.formFieldInput}
              placeholder="Enter Your Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className={classes.formField}>
            <button onClick={this.handleSubmit} className={classes.formFieldButton}>Sign In</button>{" "}
            {/* <Link to="/" className={classes.formFieldLink}>
              Create an account
            </Link> */}
          </div>

          </form>        
          </div>
      
    
    );
  }
}

export default SignInForm;