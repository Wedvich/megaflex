import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { WORKOUT_CREATE, WORKOUT_DELETE } from './index';

export default function* workoutsSaga() {
  yield takeEvery(WORKOUT_CREATE, function* createWorkoutSaga(action) {
    yield put(push(`/workouts/${action.id}`));
  });
  
  yield takeEvery(WORKOUT_DELETE, function* deleteWorkoutSaga() {
    yield put(push('/'));
  });
}
