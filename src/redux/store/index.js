import { createStore as createStore_, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createFilter } from 'redux-persist-transform-filter';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import history from './history'
import reducer from '../reducers';

export const getMiddlewares = () => {
  const middlewares = [ thunk, routerMiddleware(history) ];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger({ collapsed: true }));
  }
  return middlewares;
};

const getEnhancer = () => {
  const chain = [
    applyMiddleware(...getMiddlewares())
  ];

  if (process.env.NODE_ENV === 'development') {
    chain.push(
      require('../../containers/DevTools').default.instrument(),
      require('redux-devtools').persistState(
        window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
      )
    );
  }

  return compose(...chain);
};

export const createStore = () => {
  const persistConfig = {
    key: 'sber',
    storage,
    transforms: [
      createFilter('session', ['token'])
    ],
    whitelist: ['session']
  };
  const store = createStore_(
    enableBatching(persistReducer(persistConfig, reducer)),
    getEnhancer()
  );
  const persistor = persistStore(store, null, () => {});
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('reducers', () =>
      store.replaceReducer(
        enableBatching(
          require('reducers').reducer
        )
      )
    );
  }

  return { store, persistor, history };
};