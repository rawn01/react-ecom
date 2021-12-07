import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from "react-router-dom";
import Shop from './pages/shop/Shop';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
