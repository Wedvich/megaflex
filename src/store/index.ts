import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './rootReducer';

const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware()));

  if ((module as any).hot) {
    (module as any).hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
