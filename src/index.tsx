import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import configureStore from './store';
import App from './App';
import { RootState } from './store/rootReducer';
import { DeepPartial } from 'redux';

const cachedState: string | null | DeepPartial<RootState> = localStorage.getItem('cache');
let preloadedState: DeepPartial<RootState> | undefined;
if (cachedState) preloadedState = JSON.parse(cachedState);

const store = configureStore(preloadedState);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById('app-container'));
