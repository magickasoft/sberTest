import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Router } from 'react-router';
import { StylesProvider } from 'components';
import axios from 'utils/axios';

import Root from 'containers';
import { createStore } from 'store';

import './styles/index.less'

const { store, persistor, history } = createStore();

axios.interceptors.request.use((config) => {
  const { session: { token } } = store.getState();

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

const DevTools = process.env.NODE_ENV === 'development' ? require('containers/DevTools').default : () => null;

const rootElement = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <StylesProvider>
              <Router history={history}>
                <Component />
              </Router>
            </StylesProvider>
            <DevTools />
          </div>
        </PersistGate>
      </Provider>
    </CookiesProvider>,
    rootElement
  )
};

render(
  process.env.NODE_ENV === 'development'
    ? hot(module)(Root)
    : Root
);
