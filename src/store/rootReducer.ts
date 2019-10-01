import { combineReducers } from 'redux';
import template from '../template/reducer';
import { reducer as modal } from '../modal';
import { reducer as workouts } from '../workouts';

// FIXME: Add some way of migrating cached data when model changes.
export const appSeed = 1;
const app = (state = appSeed) => state;

const rootReducer = combineReducers({
  app,
  modal,
  template,
  workouts,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
