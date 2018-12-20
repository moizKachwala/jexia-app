import {createStore,applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';

import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';

export default function configureStore(initialState = {}) {

    const routeMiddleware = routerMiddleware(hashHistory);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = composeEnhancers(
        applyMiddleware(routeMiddleware),
    );

    const store = createStore(rootReducer, initialState, middleware);

    return store;
}
