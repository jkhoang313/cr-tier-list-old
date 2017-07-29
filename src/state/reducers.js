import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import tierListReducer from './tierList/reducer';
import tierListsReducer from './tierLists/reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  tierList: tierListReducer,
  tierLists: tierListsReducer
});

export default rootReducer;
