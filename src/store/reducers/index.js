import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import StudentsReducer from './students';
import nationalitiesReducer from './nationalities';

const rootReducer = combineReducers({
  students: StudentsReducer,
  nationalities: nationalitiesReducer, 
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
