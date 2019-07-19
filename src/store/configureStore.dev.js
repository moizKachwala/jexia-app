import {createStore,applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';

import {reduxSagaMiddleware, initSagas} from './sagas.js';
import {configureJexia} from './jexiaConfiguration';

export default function configureStore(initialState = {}) {

    const routeMiddleware = routerMiddleware(hashHistory);
    const reduxThunkMiddleware = thunk;

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = composeEnhancers(
        applyMiddleware(reduxSagaMiddleware, reduxThunkMiddleware, routeMiddleware),
    );

    const store = createStore(rootReducer, initialState, middleware);

    initSagas();

    //initialize Jexia
    configureJexia();

    return store;
}
