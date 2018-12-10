import {createStore,applyMiddleware,compose  } from 'redux'
import Reducer from './reducer'
/* // redux-thunk--start
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );
// redux-thunk--end */


// redux-saga--start
import createSagaMiddleware from 'redux-saga'
import TodoSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );
 
// redux-saga--end

const store = createStore(
    Reducer,
    enhancer
    )

  sagaMiddleware.run(TodoSaga)

export default store