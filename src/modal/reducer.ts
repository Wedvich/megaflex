import { Reducer } from 'redux';

export interface ModalState {
  activeModal: string | null;
}

const initialState = {
  activeModal: null,
};

const modalReducer: Reducer<ModalState> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default modalReducer;
