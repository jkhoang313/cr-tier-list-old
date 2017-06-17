import React from 'react';
import { Route }  from 'react-router';
import App from './App';
import TierListsDisplayPage from './tierList/displayPage/TierListsDisplayPage';
import TierListEditPage from './tierList/editPage/TierListEditPage';
import Tools from './toolsPage/Tools';

export default (
  <Route path="/" component={App}>
    <Route path="tools" component={Tools} />
    <Route path="tier-lists" component={TierListsDisplayPage} />
    <Route path="tier-list/1" component={TierListEditPage} />
  </Route>
);
