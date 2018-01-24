import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './src/reducers';
import rootSaga from './src/sagas';
import Routing from './src/routing';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);


const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);

export default App;
