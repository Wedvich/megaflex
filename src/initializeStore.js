import { createBrowserHistory } from 'history';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history)
});

const createRootSaga = () => function* rootSaga() {
  yield all([
    workoutsSaga()
  ]);
};

const initializeStore = () => {
  const history = createBrowserHistory();
  const rootReducer = createRootReducer(history);
  const rootSaga = createRootSaga();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      )
    )
  );
  sagaMiddleware.run(rootSaga);
  return { store, history };
};

export default initializeStore;
