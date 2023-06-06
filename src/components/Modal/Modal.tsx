import { Fragment, useContext, useEffect } from "react";
import "./Modal.scss";
import Context from "../../store/context";
import { useLocation, useNavigate } from "react-router-dom";
import usePaintings from "../../hooks/usePaintings";
import { createPortal } from "react-dom";
import Interface from "./Interface";
import useKeys from "../../hooks/use-keys";
import { emptyPaintingObj } from "../../helper";

const Modal = () => {
  const { isModalVisible, hideModal, showModal } = useContext(Context);
  const navigate = useNavigate();
  const { curSection, curPainting } = usePaintings();
  const location = useLocation();
  useKeys();

  /* eslint-disable */
  const portalEl = document.getElementById("overlays")!;

  // defining dynamic path to proper image
  const imgPath =
    curPainting !== emptyPaintingObj
      ? `/images/large/${curSection.folder}/${curPainting.fileName}.jpeg`
      : "";

  console.log(location.search);
  // show model after sending a link
  useEffect(() => {
    if (location.search.includes("?section=")) showModal();
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
          alt={curPainting ? curPainting.fileName : ""}
          onClick={(e) => e.stopPropagation()}
        />
      </figure>
      <Interface />
    </div>
  );

  return <Fragment>{createPortal(modal, portalEl)}</Fragment>;
};

export default Modal;
