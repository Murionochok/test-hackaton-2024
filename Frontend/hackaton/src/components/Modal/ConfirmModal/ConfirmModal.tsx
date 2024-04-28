import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useModal } from "../utils/Modal";

interface ConfirmModalProps {
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm }) => {
  const { confirmModal, closeConfirmModal } = useModal();

  const onCloseHandler = () => {
    closeConfirmModal();
  };

  return (
    <Dialog
      open={confirmModal}
      onClose={closeConfirmModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">Confirm Action</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to perform this action?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onCloseHandler}>
          Cancel
        </Button>
        <Button color="primary" autoFocus onClick={onConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
