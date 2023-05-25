import { useContext } from "react";
import "./Modal.scss";
import Context from "../store/context";

const Modal: React.FC = () => {
  const { isModalVisible, hideModal } = useContext(Context);

  return (
    <div
      className={`overlay ${isModalVisible ? "" : "hidden"}`}
      onClick={hideModal}
    ></div>
  );
};

export default Modal;
