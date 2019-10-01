import React, { useCallback, useState } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { useDispatch } from 'react-redux';
import WorkoutExercise from './WorkoutExercise';
import { Modal, useModal } from '../modal';
import { WorkoutExerciseModel } from './types';
import actions from './actions';

import './WorkoutExerciseList.scss';

export interface WorkoutExerciseListProps {
  items: WorkoutExerciseModel[];
  workoutId: string;
}

export const WorkoutExerciseList: React.FC<WorkoutExerciseListProps> = ({ items, workoutId }) => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const [editedExerciseIndex, setEditedExerciseIndex] = useState<number>();
  const dispatch = useDispatch();

  const editExercise = useCallback(
    exerciseIndex => {
      setEditedExerciseIndex(exerciseIndex);
      openModal();
    },
    [openModal],
  );

  const saveExercise = useCallback(() => {
    const updatedExercise = {
      sets: document.getElementById('edit-exercise-sets').value,
      reps: document.getElementById('edit-exercise-reps').value,
      weight: document.getElementById('edit-exercise-weight').value,
    };
    dispatch(actions.updateExercise(workoutId, editedExerciseIndex!, updatedExercise));
    closeModal();
  }, [editedExerciseIndex, closeModal, dispatch]);

  return (
    <>
      <ul className="workout-exercise-list">
        {items.map((exercise, exerciseIndex) => {
          const description = `${exercise.sets} sets · ${exercise.reps} reps · ${exercise.weight} kg`;
          return (
            <WorkoutExercise
              key={`exercise-${exercise.exerciseId}`}
              index={exerciseIndex}
              name={exercise.name}
              description={description}
              prefix={String.fromCodePoint(65 + exerciseIndex)}
              onClick={() => editExercise(exerciseIndex)}
            />
          );
        })}
      </ul>
      <Modal isOpen={isModalOpen} close={closeModal}>
        {(typeof editedExerciseIndex !== 'undefined' && (
          <div style={{ width: '100%', height: '100%' }}>
            <div>
              <label>Sets</label>
              <input
                id="edit-exercise-sets"
                type="text"
                defaultValue={items[editedExerciseIndex].sets}
                style={{ border: '1px solid black' }}
              />
            </div>
            <div>
              <label>Reps</label>
              <input
                id="edit-exercise-reps"
                type="text"
                defaultValue={items[editedExerciseIndex].reps}
                style={{ border: '1px solid black' }}
              />
            </div>
            <div>
              <label>Weight</label>
              <input
                id="edit-exercise-weight"
                type="text"
                defaultValue={items[editedExerciseIndex].weight}
                style={{ border: '1px solid black' }}
              />
            </div>
            <button onClick={saveExercise}>Save</button>
          </div>
        )) ||
          null}
      </Modal>
    </>
  );
};

export default SortableContainer(WorkoutExerciseList);
