import { createBrowserHistory } from 'history';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history)
});

const initializeStore = () => {
  const history = createBrowserHistory();
  const rootReducer = createRootReducer(history);
  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
  return { store, history };
};

export default initializeStore;
