import { useContext } from "react";
import "./PaintingCard.scss";
import Context from "../store/context";
import { Link } from "react-router-dom";
import useBuildQuery from "../hooks/useBuildQuery";
import { CardType } from "../assets/paintingObjects";

type PropsType = { paintingData: CardType; folder: string };

const PaintingCard: React.FC<PropsType> = ({ paintingData, folder }) => {
  const { showModal, isEnglish } = useContext(Context);
  const {
    paintingTitle,
    paintingTitleEN,
    fileName,
    size,
    technique,
    techniqueEN,
    year,
    price,
    priceEN,
  } = paintingData;
  const buildQuery = useBuildQuery();

  const imgPath = `/images/small/${folder}/${fileName}.jpeg`;

  return (
    <div className="card">
      <Link to={buildQuery(folder, fileName)}>
        <figure className="card__image" onClick={showModal}>
          <img src={imgPath} alt="painting" />
        </figure>
      </Link>
      <div className="card__description">
        <span>
          {isEnglish ? paintingTitleEN.normalize() : paintingTitle.normalize()}
        </span>
        <span>{size.normalize()}</span>
        <span>{isEnglish ? techniqueEN : technique.normalize()}</span>
        <span>{year.normalize()}</span>
        <span>
          {isEnglish ? priceEN : price} {typeof price === "number" ? "zł" : ""}
        </span>
      </div>
    </div>
  );
};

export default PaintingCard;
