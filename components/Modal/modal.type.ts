import { Dispatch, SetStateAction } from 'react';

export default interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  containerClasses?: string;
}
