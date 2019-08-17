import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import configureStore from './store';
import Template from './template/Template';

import './app.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Template />
  </Provider>
);

export default hot(App);
