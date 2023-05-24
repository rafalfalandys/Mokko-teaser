import { filenames } from "../assets/paintingObjects";
import { getDataFromFiles } from "../helper";
import useText from "../hooks/useText";
import "./Main.scss";
import PaintingCard from "./PaintingCard";

const Main: React.FC = () => {
  const text = useText();

  const paintingsBlindWoman = getDataFromFiles(
    "me blind woman",
    filenames.blindWoman
  ).map((paintingData, i) => (
    <PaintingCard paintingData={paintingData} key={i} />
  ));

  const paintingsTinySensibility = getDataFromFiles(
    "tiny sensibility",
    filenames.tinySensibility
  ).map((paintingData, i) => (
    <PaintingCard paintingData={paintingData} key={i} />
  ));

  const paintingsPureHappiness = getDataFromFiles(
    "pure happiness",
    filenames.pureHappiness
  ).map((paintingData, i) => (
    <PaintingCard paintingData={paintingData} key={i} />
  ));

  const paintingsEphemerally = getDataFromFiles(
    "ephemerally",
    filenames.ephemerally
  ).map((paintingData, i) => (
    <PaintingCard paintingData={paintingData} key={i} />
  ));

  return (
    <div className="main__wrapper">
      <main className="main">
        <section className="main__section">
          <h2>{text.headerBlindWoman}</h2>
          <div className="main__section__paintings">{paintingsBlindWoman}</div>
        </section>

        <section className="main__section">
          <h2>{text.headerTinySensibility}</h2>
          <div className="main__section__paintings">
            {paintingsTinySensibility}
          </div>
        </section>

        <section className="main__section">
          <h2>{text.headerPureHappiness}</h2>
          <div className="main__section__paintings">
            {paintingsPureHappiness}
          </div>
        </section>

        <section className="main__section">
          <h2>{text.headerEphemerally}</h2>
          <div className="main__section__paintings">{paintingsEphemerally}</div>
        </section>
      </main>
      ;
    </div>
  );
};

export default Main;
