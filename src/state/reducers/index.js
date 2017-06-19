import { combineReducers } from 'redux';
import userReducer from './userReducer'
import tierListReducer from './tierListReducer'
import tierListsReducer from './tierListsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  tierList: tierListReducer,
  tierLists: tierListsReducer
})

export default rootReducer
