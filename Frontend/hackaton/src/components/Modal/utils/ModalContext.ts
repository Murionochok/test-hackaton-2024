import { createContext } from "react";

interface ModalContextType {
  confirmModal: boolean;
  openConfirmModal: () => void;
  closeConfirmModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
