import { useState } from 'react';

export { default as Modal } from './Modal';
export { default as reducer } from './reducer';

// TODO: Rework modals into something more useful.

export const useModal = (isInitiallyOpen = false): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return [isOpen, open, close];
};
