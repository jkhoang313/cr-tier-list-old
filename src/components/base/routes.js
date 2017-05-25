import React from 'react';
import { Route }  from 'react-router';
import App from '../App';
import TierListsDisplay from '../tierList/TierListsDisplay';
import TierList from './TierList';
import Tools from './Tools';

export default (
  <Route path="/" component={App}>
    <Route path="tools" component={Tools} />
    <Route path="tier-lists" component={TierListsDisplay} />
    <Route path="tier-list/1" component={TierList} />
  </Route>
);
