import { CardType } from "../assets/paintingObjects";
import "./OneSection.scss";
import PaintingCard from "./PaintingCard";

const OneSection: React.FC<{
  sectionData: CardType[];
  folder: string;
  header: string;
}> = ({ sectionData, folder, header }) => {
  const paintingCards = sectionData.map((paintingData, i) => (
    <PaintingCard paintingData={paintingData} folder={folder} key={i} />
  ));

  return (
    <section className="main__section">
      <header className="main__section__header">
        <h2>{header}</h2>
      </header>
      <div className="main__section__paintings">{paintingCards}</div>
    </section>
  );
};

export default OneSection;
