import { useContext } from "react";
import { PaintingData } from "../types";
import "./PaintingCard.scss";
import Context from "../store/context";
import { Link } from "react-router-dom";

type PropsType = { paintingData: PaintingData; folder: string };

const PaintingCard: React.FC<PropsType> = ({ paintingData, folder }) => {
  const { showModal } = useContext(Context);

  const imgPath = `/images/small/${folder}/${paintingData.fileName}.jpeg`;

  return (
    <div className="card">
      <Link to={`?section=${folder}?painting=${paintingData.paintingTitle}`}>
        <figure className="card__image" onClick={showModal}>
          <img src={imgPath} alt="painting" />
        </figure>
      </Link>
      <div className="card__description">
        <span>{paintingData.paintingTitle}</span>
        <span>{paintingData.size}</span>
        <span>{paintingData.technique}</span>
        <span>{paintingData.year}</span>
      </div>
    </div>
  );
};

export default PaintingCard;
