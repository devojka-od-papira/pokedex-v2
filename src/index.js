import 'regenerator-runtime/runtime';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import App from './app/App';

if (module.hot) {
  module.hot.accept();
}

/* eslint-disable no-undef */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
