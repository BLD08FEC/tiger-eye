/* eslint-disable no-undef */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counterReducer from './data/reducers/counterReducer';
import productIdReducer from './data/reducers/productIdReducer';
import reviewMetaReducer from './data/reducers/reviewMetaReducer';

const reducer = combineReducers({
  // reducers placed in here
  // counterReducer,
  // productIdReducer,
  reviewMetaReducer,
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
