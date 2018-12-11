import { v4 as guid } from 'uuid';

export const WORKOUT_CREATE = 'workout.create';
export const WORKOUT_DELETE = 'workout.delete';

export const createWorkout = () => ({
  type: WORKOUT_CREATE,
  id: guid()
});

export const deleteWorkout = (id) => ({
  type: WORKOUT_DELETE,
  id
});

export const reducer = (state = [], action) => {
  switch (action.type) {
    case WORKOUT_CREATE:
      return [...state, {
        id: action.id,
        exercises: []
      }];

    case WORKOUT_DELETE:
      return state.filter((workout) => workout.id !== action.id);

    default:
      return state;
  }
}
