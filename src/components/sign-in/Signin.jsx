import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import "./Signin.scss";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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
          <CustomButton type="submit">
            Sign in
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default Signin;