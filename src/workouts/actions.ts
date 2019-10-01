import { WorkoutExerciseModel, WorkoutsActionTypes } from './types';

export const reorderExercise = (workoutId: string, oldIndex: number, newIndex: number) => ({
  type: WorkoutsActionTypes.ReorderExercise,
  workoutId,
  oldIndex,
  newIndex,
});

export const updateExercise = (
  workoutId: string,
  exerciseIndex: number,
  updatedExercise: Partial<WorkoutExerciseModel>,
) => ({
  type: WorkoutsActionTypes.UpdateExercise,
  workoutId,
  exerciseIndex,
  updatedExercise,
});

export default {
  reorderExercise,
  updateExercise,
};
