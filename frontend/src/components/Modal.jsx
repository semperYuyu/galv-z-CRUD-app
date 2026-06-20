import { useEffect, useRef } from "react"
import ModalContent from "./ModalContent"
const Modal = ({ openModal, closeModal}) => {
  const ref = useRef()

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [openModal])
  return (
    <div>
      { openModal && <div id={"openedModal"} /> }
      <dialog ref={ref} onCancel={closeModal} id={"modalContentDialog"}>
        <ModalContent cancel={closeModal} />
      </dialog>
    </div>
  );
};

export default Modal;
