import {createStore,applyMiddleware,compose  } from 'redux'
import Reducer from './reducer'
// redux-thunk
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );

const store = createStore(
    Reducer,
    enhancer
    )

export default store