import { createContext } from "react";

interface ModalContextType {
  confirmModal: boolean;
  secondConfirmModal: boolean;
  openConfirmModal: () => void;
  closeConfirmModal: () => void;
  openSecondConfirmModal: () => void;
  closeSecondConfirmModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
