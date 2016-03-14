import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'. See note below.
}
export default combineReducers(reducers);
