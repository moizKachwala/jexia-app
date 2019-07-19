import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import StudentsReducer from './students';
import nationalitiesReducer from './nationalities';
import OrdersReducer from './orders';

const rootReducer = combineReducers({
  students: StudentsReducer,
  nationalities: nationalitiesReducer, 
  routing: routerReducer,
  orders: OrdersReducer,
  form: formReducer,
});

export default rootReducer;
