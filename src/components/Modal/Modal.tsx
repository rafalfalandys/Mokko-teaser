import { Fragment, useContext } from "react";
import "./Modal.scss";
import Context from "../../store/context";
import { useNavigate } from "react-router-dom";
import usePaintings from "../../hooks/usePaintings";
import { createPortal } from "react-dom";

const Modal = () => {
  const { isModalVisible, hideModal } = useContext(Context);
  const navigate = useNavigate();
  const { section, paintingData } = usePaintings();
  /* eslint-disable */
  const portalEl = document.getElementById("overlays")!;

  // defining dynamic path to proper image
  const imgPath = paintingData
    ? `/images/large/${section.folder}/${paintingData.fileName}.jpeg`
    : "";

  // hiding modal and navigating back to home page
  const onClickHandler = () => {
    hideModal();
    navigate("/");
  };

  const modal = (
    <div className={`modal__wrapper ${isModalVisible ? "" : "hidden"}`}>
      <div className="modal__overlay" onClick={onClickHandler}></div>

      <figure className={`modal__image ${isModalVisible ? "" : "hidden"}`}>
        <img
          src={imgPath}
          alt={paintingData ? paintingData.fileName : ""}
          onClick={(e) => e.stopPropagation()}
        />
      </figure>
    </div>
  );

  return <Fragment>{createPortal(modal, portalEl)}</Fragment>;
};

export default Modal;
