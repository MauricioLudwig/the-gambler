import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default () => createStore(rootReducer, enhancers(applyMiddleware(thunk)));