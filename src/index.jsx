/* eslint-disable no-undef */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import productIdReducer from './data/reducers/productIdReducer';
import reviewMetaReducer from './data/reducers/reviewMetaReducer';
import productDataReducer from './data/reducers/productDataReducer';
import productsListReducer from './data/reducers/productsListReducer';

const reducer = combineReducers({
  // productIdReducer,
  reviewMetaReducer,
  productDataReducer,
  productsListReducer,
});

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
