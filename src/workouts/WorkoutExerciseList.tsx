import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import WorkoutExercise from './WorkoutExercise';

import './WorkoutExerciseList.scss';
import { Modal, useModal } from '../modal';
import { WorkoutExerciseModel } from './types';

export interface WorkoutExerciseListProps {
  items: WorkoutExerciseModel[];
}

export const WorkoutExerciseList: React.FC<WorkoutExerciseListProps> = ({ items }) => {
  const [isModalOpen, openModal, closeModal] = useModal();
  return (
    <>
      <ul className="workout-exercise-list">
        {items.map((exercise, index) => {
          const description = `${exercise.sets} sets · ${exercise.reps} reps · ${exercise.weight} kg`;
          return (
            <WorkoutExercise
              key={`exercise-${exercise.exerciseId}`}
              index={index}
              name={exercise.name}
              description={description}
              prefix={String.fromCodePoint(65 + index)}
              onClick={openModal}
            />
          );
        })}
      </ul>
      <Modal isOpen={isModalOpen} close={closeModal}>
        <div>Silly modal</div>
      </Modal>
    </>
  );
};

export default SortableContainer(WorkoutExerciseList);
