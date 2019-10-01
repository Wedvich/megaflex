import actions from './actions';

export interface WorkoutsState {
  byId: { [id: string]: WorkoutModel };
  allIds: string[];
}

export interface WorkoutModel {
  id: string;
  exercises: WorkoutExerciseModel[];
}

export interface WorkoutExerciseModel {
  name: string;
  exerciseId: string;
  sets: string;
  reps: string;
  weight: string;
}

export enum WorkoutsActionTypes {
  ReorderExercise = 'workouts:reorder-exercise',
}

export type WorkoutsAction = ReturnType<typeof actions[keyof typeof actions]>;
