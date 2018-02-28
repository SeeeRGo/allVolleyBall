import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';
import Routing from './routing';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);


export default () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);

