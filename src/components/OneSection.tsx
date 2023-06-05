import { CardType } from "../assets/paintingObjects";
import "./OneSection.scss";
import PaintingCard from "./PaintingCard";

type Props = {
  sectionData: CardType[];
  folder: string;
  header: string;
  description: { __html: string | TrustedHTML };
};

const OneSection: React.FC<Props> = ({
  sectionData,
  folder,
  header,
  description,
}) => {
  const paintingCards = sectionData.map((paintingData, i) => (
    <PaintingCard paintingData={paintingData} folder={folder} key={i} />
  ));

  return (
    <section className="main__section">
      <header className="main__section__header">
        <h3>{header}</h3>
      </header>
      <div
        className="main__section__description"
        dangerouslySetInnerHTML={description}
      />
      <div className="main__section__paintings">{paintingCards}</div>
    </section>
  );
};

export default OneSection;
