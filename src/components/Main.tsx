import {
  dataEphemerally,
  dataMeBlindWoman,
  dataPureHappiness,
  dataTinySensibility,
} from "../assets/paintingObjects";
import useText from "../hooks/useText";
import "./Main.scss";
import PaintingCard from "./PaintingCard";

const Main: React.FC = () => {
  const text = useText();

  const cardsBlindWoman = dataMeBlindWoman.map((data, i) => (
    <PaintingCard paintingData={data} folder="me blind woman" key={i} />
  ));

  const cardsTinySensibility = dataTinySensibility.map((data, i) => (
    <PaintingCard paintingData={data} folder="tiny sensibility" key={i} />
  ));

  const cardsPureHappiness = dataPureHappiness.map((data, i) => (
    <PaintingCard paintingData={data} folder="pure happiness" key={i} />
  ));

  const cardsEphemerally = dataEphemerally.map((data, i) => (
    <PaintingCard paintingData={data} folder="ephemerally" key={i} />
  ));

  return (
    <div className="main__wrapper">
      <main className="main">
        <section className="main__section">
          <h2>{text.headerBlindWoman}</h2>
          <div className="main__section__paintings">{cardsBlindWoman}</div>
        </section>

        <section className="main__section">
          <h2>{text.headerTinySensibility}</h2>
          <div className="main__section__paintings">{cardsTinySensibility}</div>
        </section>

        <section className="main__section">
          <h2>{text.headerPureHappiness}</h2>
          <div className="main__section__paintings">{cardsPureHappiness}</div>
        </section>

        <section className="main__section">
          <h2>{text.headerEphemerally}</h2>
          <div className="main__section__paintings">{cardsEphemerally}</div>
        </section>
      </main>
      ;
    </div>
  );
};

export default Main;
