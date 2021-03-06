import { Reducer } from 'redux';
import { WorkoutsAction, WorkoutsActionTypes, WorkoutsState } from './types';
import { arrayMove } from '../common/utils';

const initialState: WorkoutsState = {
  byId: {
    '1': {
      id: '1',
      exercises: [
        {
          exerciseId: 'db-squat',
          name: 'Dumbbell squat',
          sets: '3',
          reps: '15',
          weight: '50',
        },
        {
          exerciseId: 'leg-extension',
          name: 'Leg extension',
          sets: '3',
          reps: '20-15-10',
          weight: '50',
        },
      ],
    },
    '2': {
      id: '2',
      exercises: [
        {
          exerciseId: 'bench-press',
          name: 'Bench press',
          sets: '5',
          reps: '5',
          weight: '70',
        },
        {
          exerciseId: 'incline-db-press',
          name: 'Incline dumbbell press',
          sets: '3',
          reps: '10',
          weight: '25',
        },
        {
          exerciseId: 'parallel-bar-dip',
          name: 'Parallel bar dip',
          sets: '3',
          reps: '15',
          weight: '0',
        },
        {
          exerciseId: 'push-up',
          name: 'Push-up',
          sets: '5',
          reps: '15',
          weight: '0',
        },
        {
          exerciseId: 'barbell-pullover',
          name: 'Barbell pullover',
          sets: '2',
          reps: '15',
          weight: '20',
        },
        {
          exerciseId: 'cable-crossover-fly',
          name: 'Cable crossover fly',
          sets: '3',
          reps: '20',
          weight: '0',
        },
        {
          exerciseId: 'rope-push-down',
          name: 'Rope push-down',
          sets: '3',
          reps: '10',
          weight: '20',
        },
        {
          exerciseId: 'reverse-push-down',
          name: 'Reverse push-down',
          sets: '3',
          reps: '10',
          weight: '20',
        },
      ],
    },
  },
  allIds: ['1', '2'],
};

const workoutsReducer: Reducer<WorkoutsState, WorkoutsAction> = (state = initialState, action) => {
  switch (action.type) {
    case WorkoutsActionTypes.ReorderExercise: {
      // Don't do anything if the workout doesn't exist.
      if (!state.allIds.includes(action.workoutId)) return state;

      // Reorder the workout exercises.
      const workout = { ...state.byId[action.workoutId] };
      workout.exercises = arrayMove(workout.exercises, action.oldIndex, action.newIndex);

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.workoutId]: workout,
        },
      };
    }

    case WorkoutsActionTypes.UpdateExercise: {
      // Don't do anything if the workout doesn't exist.
      if (!state.allIds.includes(action.workoutId)) return state;

      const workout = { ...state.byId[action.workoutId] };
      workout.exercises = [...workout.exercises];

      workout.exercises[action.exerciseIndex] = {
        ...workout.exercises[action.exerciseIndex],
        ...action.updatedExercise,
      };

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.workoutId]: workout,
        },
      };
    }

    default:
      return state;
  }
};

export default workoutsReducer;
