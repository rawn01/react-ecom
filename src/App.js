import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from "react-router-dom";
import Shop from './pages/shop/Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
