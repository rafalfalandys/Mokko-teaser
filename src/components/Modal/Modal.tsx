import { Fragment, useContext, useEffect } from "react";
import "./Modal.scss";
import Context from "../../store/context";
import { useLocation, useNavigate } from "react-router-dom";
import usePaintings from "../../hooks/usePaintings";
import { createPortal } from "react-dom";
import Interface from "./Interface";
import useKeys from "../../hooks/use-keys";

const Modal = () => {
  const { isModalVisible, hideModal, showModal } = useContext(Context);
  const navigate = useNavigate();
  const { curSection, paintingData } = usePaintings();
  const location = useLocation();
  useKeys();

  /* eslint-disable */
  const portalEl = document.getElementById("overlays")!;

  // defining dynamic path to proper image
  const imgPath = paintingData
    ? `/images/large/${curSection.folder}/${paintingData.fileName}.jpeg`
    : "";

  // show model after sending a link
  useEffect(() => {
    if (location.search) showModal();
  }, []);

  // hiding modal and navigating back to home page
  const onClickHandler = () => {
    hideModal();
    setTimeout(() => {
      navigate("/");
    }, 300);
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
      <Interface />
    </div>
  );

  return <Fragment>{createPortal(modal, portalEl)}</Fragment>;
};

export default Modal;
