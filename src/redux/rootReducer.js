import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
//import counter from './modules/counter'
import {reducer as form} from 'redux-form';

export default combineReducers({
  router,
  form

})
