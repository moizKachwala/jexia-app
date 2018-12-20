import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import UsersReducer from './users';

const rootReducer = combineReducers({
  users: UsersReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
