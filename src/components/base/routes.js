import React from 'react';
import { Route }  from 'react-router';
import App from '../App';
import TierList from './TierList';
import Tools from './Tools';

export default (
  <Route path="/" component={App}>
    <Route path="tools" component={Tools} />
    <Route path="tier-lists" component={TierList} />
  </Route>
);
