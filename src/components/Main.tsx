import usePaintings from "../hooks/usePaintings";
import useText from "../hooks/useText";
import "./Main.scss";
import OneSection from "./OneSection";

const Main: React.FC = () => {
  const { allSectionsData } = usePaintings();
  const text = useText();

  const sections = allSectionsData.map((sectionData, i) => (
    <OneSection
      key={i}
      sectionData={sectionData.data}
      folder={sectionData.folder}
      header={sectionData.header}
      description={sectionData.description}
    />
  ));

  return (
    <div className="main__wrapper">
      <main className="main">
        <h2>{text.headerBeforeAllPaintings}</h2>
        {sections}
      </main>
      ;
    </div>
  );
};

export default Main;
