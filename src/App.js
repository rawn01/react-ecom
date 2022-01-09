import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './store/user/userAction';
import CheckoutPage from './pages/checkout/CheckoutPage';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, doc => setCurrentUser({
          id: doc.id,
          ...doc.data(),
        }));
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignup />} />
          <Route exact path="/checkout" component={CheckoutPage} />        
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
