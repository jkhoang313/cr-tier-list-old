import React from 'react';
import { Route }  from 'react-router';
import App from './App';
import TierListsDisplayPage from './tierList/displayPage/TierListsDisplayPage';
import TierListEditPage from './tierList/editPage/TierListEditPage';
import ToolsPage from './toolsPage/ToolsPage';

export default (
  <Route path="/" component={App}>
    <Route path="tools" component={ToolsPage} />
    <Route path="tier-lists/:list_type" component={TierListsDisplayPage} />
    <Route path="tier-list/:id" component={TierListEditPage} />
  </Route>
);
