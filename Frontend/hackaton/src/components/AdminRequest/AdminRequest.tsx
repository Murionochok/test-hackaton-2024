import { Button } from "@mui/material";
import Request from "../Request/Request";

import { useModal } from "../Modal/utils/Modal";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import SecondConfirmModal from "../Modal/ConfirmModal/SecondConfirmModal";
export default function VolunteerRequest() {
  const { openConfirmModal, openSecondConfirmModal } = useModal();

  const handleConfirmRequest = () => {
    openConfirmModal();
  };

  const handleSubmitConfirm = () => {
    // POST confirm
    // navigate("/admin/requests")
  };

  const handleSubmitReject = () => {
    //DELETE reject
    // navigate("/admin/requests")
  };

  const handleRejectRequest = () => {
    openSecondConfirmModal();
  };

  return (
    <>
      <ConfirmModal title="Confirm Request" onConfirm={handleSubmitConfirm} />
      <SecondConfirmModal
        title="Reject Request"
        onConfirm={handleSubmitReject}
      />
      <Request>
        <Button variant="contained" onClick={handleConfirmRequest}>
          Confirm
        </Button>
        <Button variant="contained" onClick={handleRejectRequest}>
          Reject
        </Button>
      </Request>
    </>
  );
}
