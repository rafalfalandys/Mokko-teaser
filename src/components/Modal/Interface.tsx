import { useContext } from "react";
import usePaintings from "../../hooks/usePaintings";
import "./Interface.scss";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Context from "../../store/context";
import { useNavigate } from "react-router-dom";

const Interface = () => {
  const { curSection, curPaintingIndex, nextSlide, prevSlide, paintingData } =
    usePaintings();
  const { hideModal } = useContext(Context);
  const navigate = useNavigate();

  const hideModalHandler = () => {
    hideModal();
    navigate("/");
  };

  return (
    <div className="interface">
      {/* counter */}
      <h3 className="interface__counter">
        {curSection?.header}
        <span className="interface__counter--numbers">
          &nbsp;
          {`${curPaintingIndex + 1} / ${curSection?.data.length}`}
        </span>
        <p>
          {paintingData?.paintingTitle}, {paintingData?.size},{" "}
          {paintingData?.technique}, {paintingData?.year}
        </p>
        <p></p>
      </h3>
      {/* arrows */}
      <i
        className="interface__icon interface__icon--arrow-left"
        onClick={prevSlide}
      >
        <ChevronLeftIcon />
      </i>
      <i
        className="interface__icon interface__icon--arrow-right"
        onClick={nextSlide}
      >
        <ChevronRightIcon />
      </i>
      {/* close btn */}
      <i
        className="interface__icon interface__icon--close"
        onClick={hideModalHandler}
      >
        <XMarkIcon />
      </i>
    </div>
  );
};

export default Interface;
