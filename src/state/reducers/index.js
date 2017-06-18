import { combineReducers } from 'redux';
import authReducer from './authReducer'
import tierListReducer from './tierListReducer'
import tierListsReducer from './tierListsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tierList: tierListReducer,
  tierLists: tierListsReducer
})

export default rootReducer
