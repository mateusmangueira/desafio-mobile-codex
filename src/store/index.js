import {createStore, applyMiddleware} from 'redux';

import {persistStore} from 'redux-persist';

import createSagaMiddleware from 'redux-saga';

import persistReducer from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducer(rootReducer),
  applyMiddleware(sagaMiddleware),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
