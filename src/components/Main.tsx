import usePaintings from "../hooks/usePaintings";
import "./Main.scss";
import OneSection from "./OneSection";

const Main: React.FC = () => {
  const { allSectionsData } = usePaintings();

  const sections = allSectionsData.map((sectionData, i) => (
    <OneSection
      key={i}
      sectionData={sectionData.data}
      folder={sectionData.folder}
      header={sectionData.header}
    />
  ));

  return (
    <div className="main__wrapper">
      <main className="main">{sections}</main>;
    </div>
  );
};

export default Main;
