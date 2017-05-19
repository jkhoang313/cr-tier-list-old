import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import rootReducer from './state/reducers';
import routes from './components/base/routes'

import './stylesheets/main.scss'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider >,
  document.getElementById('root')
);
