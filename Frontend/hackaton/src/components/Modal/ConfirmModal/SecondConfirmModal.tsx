import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useModal } from "../utils/Modal";

interface ConfirmModalProps {
  onConfirm: () => Promise<void> | void;
  title: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm, title }) => {
  const { secondConfirmModal, closeSecondConfirmModal } = useModal();

  const onCloseHandler = () => {
    closeSecondConfirmModal();
  };

  return (
    <Dialog
      open={secondConfirmModal}
      onClose={closeSecondConfirmModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
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
