import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
//import counter from './modules/counter'
import {reducer as form} from 'redux-form'
//import richtext from './modules/richtext'
import article from './modules/article'

export default combineReducers({
  router,
  form,
  article
})
