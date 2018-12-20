import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import StudentsReducer from './students';

const rootReducer = combineReducers({
  students: StudentsReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
