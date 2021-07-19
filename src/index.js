import 'regenerator-runtime/runtime';
import * as React from 'react';
import { render } from 'react-dom';
import App from './app/App';

if (module.hot) {
  module.hot.accept();
}

/* eslint-disable no-undef */
render(<App />, document.getElementById('root'));
