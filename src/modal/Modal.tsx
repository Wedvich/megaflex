import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, close, children }) =>
  isOpen
    ? ReactDOM.createPortal(
        <>
          <CSSTransition in={isOpen} timeout={300} appear classNames="animate">
            <div className="modal-overlay" onClick={close} />
          </CSSTransition>
          <CSSTransition in={isOpen} timeout={300} appear classNames="animate">
            <div className="modal-container">
              {children}
              <button onClick={close} className="modal-container__close-button">
                ✕
              </button>
            </div>
          </CSSTransition>
        </>,
        document.body,
      )
    : null;

export default Modal;
