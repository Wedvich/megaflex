import { Middleware, applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './rootReducer';

const cacheMiddleware: Middleware = store => next => action => {
  next(action);
  const state = store.getState();
  setTimeout(() => {
    localStorage.setItem('cache', JSON.stringify(state));
  });
};

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(cacheMiddleware)));

  if ((module as any).hot) {
    (module as any).hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
