import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from "react-router-dom";
import Shop from './pages/shop/Shop';
import './App.css';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log(user);
      this.setState({
        currentUser: user
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
