import ModalWrapper from "@components/ModalWrapper";
import { Button, FailureSvg, SuccessSvg } from "@components/atoms";
import { useNavigate } from "react-router-dom";

function MessageModal({ openModal, closeModal, type, message }) {
  const navigate = useNavigate();
  const render = () => {
    switch (type) {
      case "info":
        return <SuccessSvg />;
      case "error":
        return <FailureSvg />;
    }
  };
  return (
    <ModalWrapper openModal={openModal} closeModal={closeModal}>
      <div className="grid place-items-center">
        {render()}
        <p>{message}</p>
        <div className="flex flex-row justify-between items-center gap-x-2">
          <Button
            title={"Return Home"}
            type={"gray"}
            onClick={() => navigate("/")}
          />
          <Button
            title={"Submit another"}
            type={"primary"}
            onClick={closeModal}
          />
        </div>
      </div>
    </ModalWrapper>
  );
}

export default MessageModal;
