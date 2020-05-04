//! this file use to config redux storeand compose middlewares

import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import * as ajax from 'config/ajax';
import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware({dependencies: {...ajax}});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(epicMiddleware);

const store = createStore(rootReducer, composeEnhancers(middleware));

// Debugging purpose. Access store from console
global.store = __DEV__ && store;

epicMiddleware.run(rootEpic);

export default store;
