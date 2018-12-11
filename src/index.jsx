import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import initializeStore from './initializeStore';
import App from './app';
import 'normalize.css';

const { store, history } = initializeStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./app');
}
