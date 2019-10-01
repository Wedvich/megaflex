import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import WorkoutExercise from './WorkoutExercise';

import './WorkoutExerciseList.scss';
import { Modal, useModal } from '../modal';
import { Exercise } from '../store/rootReducer';

export interface WorkoutExerciseListProps {
  items: Exercise[];
}

export const WorkoutExerciseList: React.FC<WorkoutExerciseListProps> = ({ items }) => {
  const [isModalOpen, openModal, closeModal] = useModal();
  return (
    <>
      <ul className="workout-exercise-list">
        {items.map((item, index) => (
          <WorkoutExercise
            key={`exercise-${item.id}`}
            index={index}
            name={item.name}
            description={item.subtitle}
            prefix={String.fromCodePoint(65 + index)}
            onClick={openModal}
          />
        ))}
      </ul>
      <Modal isOpen={isModalOpen} close={closeModal}>
        <div>Silly modal</div>
      </Modal>
    </>
  );
};

export default SortableContainer(WorkoutExerciseList);
