import { combineReducers } from 'redux';
import authReducer from './authReducer'
import tierListReducer from './tierListReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tierList: tierListReducer
})

export default rootReducer
