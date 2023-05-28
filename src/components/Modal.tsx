import { Fragment, useContext } from "react";
import "./Modal.scss";
import Context from "../store/context";
import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import usePaintings from "../hooks/usePaintings";
import { createPortal } from "react-dom";

const Modal = () => {
  const { isModalVisible, hideModal } = useContext(Context);
  const navigate = useNavigate();
  const queryObj = useQuery();
  const allPaintingsData = usePaintings();
  const portalEl = document.getElementById("overlays")!;

  // finding section in all paintings basing on query
  const section = allPaintingsData.filter(
    (section) => section.folder === decodeURI(queryObj.section)
  )[0];

  // fainding painting within section basing on query
  const paintingData = section
    ? section.data.filter(
        (painting) => painting.paintingTitle === decodeURI(queryObj.painting)
      )[0]
    : undefined;

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
    <Fragment>
      <div
        className={`overlay ${isModalVisible ? "" : "hidden"}`}
        onClick={onClickHandler}
      ></div>

      <figure className={`modal__image ${isModalVisible ? "" : "hidden"}`}>
        <img src={imgPath} alt={paintingData ? paintingData.fileName : ""} />
      </figure>
    </Fragment>
  );

  return <Fragment>{createPortal(modal, portalEl)}</Fragment>;
};

export default Modal;
