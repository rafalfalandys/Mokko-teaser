import { useContext } from "react";
import { PaintingData } from "../types";
import "./PaintingCard.scss";
import Context from "../store/context";
import { Link } from "react-router-dom";
import useBuildQuery from "../hooks/useBuildQuery";

type PropsType = { paintingData: PaintingData; folder: string };

const PaintingCard: React.FC<PropsType> = ({ paintingData, folder }) => {
  const { showModal } = useContext(Context);
  const { paintingTitle, fileName, size, technique, year } = paintingData;
  const buildQuery = useBuildQuery();

  const imgPath = `/images/small/${folder}/${fileName}.jpeg`;

  return (
    <div className="card">
      <Link to={buildQuery(folder, paintingTitle)}>
        <figure className="card__image" onClick={showModal}>
          <img src={imgPath} alt="painting" />
        </figure>
      </Link>
      <div className="card__description">
        <span>{paintingTitle}</span>
        <span>{size}</span>
        <span>{technique}</span>
        <span>{year}</span>
      </div>
    </div>
  );
};

export default PaintingCard;
