import React, { useContext, useState } from "react";
import { ModalContext } from "./ModalContext";

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [confirmModal, setConfirmModal] = useState(false);
  const [secondConfirmModal, setSecondConfirmModal] = useState(false);

  const openConfirmModal = () => {
    setConfirmModal(true);
  };
  const closeConfirmModal = () => setConfirmModal(false);
  const openSecondConfirmModal = () => {
    setSecondConfirmModal(true);
  };
  const closeSecondConfirmModal = () => setSecondConfirmModal(false);

  return (
    <ModalContext.Provider
      value={{
        confirmModal,
        secondConfirmModal,
        openConfirmModal,
        closeConfirmModal,
        openSecondConfirmModal,
        closeSecondConfirmModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
}
