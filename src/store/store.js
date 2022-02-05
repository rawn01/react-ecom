import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

// const middlewares = [logger];
const middlewares = [thunk];

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(...middlewares),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;