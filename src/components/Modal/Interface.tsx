import { useContext } from "react";
import usePaintings from "../../hooks/usePaintings";
import "./Interface.scss";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Context from "../../store/context";

const Interface = () => {
  const { section, curPaintingNo } = usePaintings();
  const { hideModal } = useContext(Context);

  return (
    <div className="interface">
      {/* counter */}
      <h3 className="interface__counter">
        {section?.header}
        <span className="interface__counter--numbers">
          &nbsp;
          {`${curPaintingNo} / ${section?.data.length}`}
        </span>
      </h3>
      {/* arrows */}
      <i className="interface__icon interface__icon--arrow-left">
        <ChevronLeftIcon />
      </i>
      <i className="interface__icon interface__icon--arrow-right">
        <ChevronRightIcon />
      </i>
      {/* close btn */}
      <i className="interface__icon interface__icon--close" onClick={hideModal}>
        <XMarkIcon />
      </i>
    </div>
  );
};

export default Interface;
