import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './state/reducers';
import routes from './components/routes'

import './stylesheets/main.scss'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
