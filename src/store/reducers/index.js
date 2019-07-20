import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import OrdersReducer from './orders';

const rootReducer = combineReducers({
  routing: routerReducer,
  orders: OrdersReducer,
  form: formReducer,
});

export default rootReducer;
