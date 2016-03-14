import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import ReduxReducer from './modules/redux-form'


export default combineReducers({
  counter,
  router,
  ReduxReducer

})
