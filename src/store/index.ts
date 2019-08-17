import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './rootReducer';

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware()));
  return store;
};

export default configureStore;
