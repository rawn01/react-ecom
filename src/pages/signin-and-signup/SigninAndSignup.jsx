import React from 'react';
import Signin from '../../components/sign-in/Signin';
import Signup from '../../components/sign-up/Signup';
import "./SigninAndSignup.scss";

class SigninAndSignup extends React.Component {
  
  render() {
    return (
      <div className='signin-and-signup'>
        <Signin />
        <Signup />
      </div>
    );
  };
}

export default SigninAndSignup; 
