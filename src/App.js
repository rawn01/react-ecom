import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from "react-router-dom";
import Shop from './pages/shop/Shop';
import './App.css';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
