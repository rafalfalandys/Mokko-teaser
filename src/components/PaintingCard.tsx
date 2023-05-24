import { PaintingData } from "../types";
import "./PaintingCard.scss";

const PaintingCard: React.FC<{ paintingData: PaintingData }> = ({
  paintingData,
}) => {
  const imgPath = `/images/small/${paintingData.folder}/${paintingData.fileName}.jpeg`;

  return (
    <div className="card">
      <figure className="card__image">
        <img src={imgPath} alt="painting" />
      </figure>
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
