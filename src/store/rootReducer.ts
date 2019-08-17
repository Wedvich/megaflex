import { combineReducers } from 'redux';

import template from '../template/reducer';

const rootReducer = combineReducers({
  template,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
