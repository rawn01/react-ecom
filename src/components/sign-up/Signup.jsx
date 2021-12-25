import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from "../../firebase/firebase";
import "./Signup.scss";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  } 

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword) {
      return alert("Passwords don't match");
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    } catch(ex) {
      console.log("ex:", ex);
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState(({
      [name]: value
    }));
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
  
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type={"text"}
            name={"displayName"}
            value={this.state.displayName}
            onChange={this.handleChange}
            label={"Name"}
            required
          />
          <FormInput
            type={"email"}
            name={"email"}
            value={this.state.email}
            onChange={this.handleChange}
            label={"Email"}
            required
          />
          <FormInput
            type={"password"}
            name={"password"}
            value={this.state.password}
            onChange={this.handleChange}
            label={"Password"}
            required
          />
          <FormInput
            type={"password"}
            name={"confirmPassword"}
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label={"Confirm Password"}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
};

export default Signup;
