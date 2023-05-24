import { PaintingData } from "../types";
import "./PaintingCard.scss";

const PaintingCard: React.FC<{ paintingData: PaintingData }> = ({
  paintingData,
}) => {
  const imageSrc = `/images/small/ja slepa kobieta/${paintingData.fileName.normalize()}.jpeg`;

  return (
    <div>
      <figure>
        <img src={imageSrc} alt="" />
      </figure>
    </div>
  );
};

export default PaintingCard;
