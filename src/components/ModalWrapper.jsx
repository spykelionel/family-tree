import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  maxHeight: "80vh",
  overflowX: "hidden",
  p: 2,
  width: "50%",
  borderRadius: "10px",
};

function ModalWrapper({ openModal, closeModal, children, ...props }) {
  return (
    <Modal
      open={openModal}
      onClose={closeModal}
      aria-labelledby="modal"
      aria-describedby="my-modal"
      // sx={{ width: "100%" }}
      className="super-modal"
    >
      <Box sx={style} {...props}>
        {children}
      </Box>
    </Modal>
  );
}

export default ModalWrapper;
