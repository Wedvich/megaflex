import { WorkoutsActionTypes } from './types';

export const reorderExercise = (workoutId: string, oldIndex: number, newIndex: number) => ({
  type: WorkoutsActionTypes.ReorderExercise,
  workoutId,
  oldIndex,
  newIndex,
});

export default {
  reorderExercise,
};
