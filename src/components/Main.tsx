import {
  dataEphemerally,
  dataMeBlindWoman,
  dataPureHappiness,
  dataTinySensibility,
} from "../assets/paintingObjects";
import useText from "../hooks/useText";
import "./Main.scss";
import OneSection from "./OneSection";

const Main: React.FC = () => {
  const text = useText();

  const sectionsData = [
    {
      folder: "me blind woman",
      data: dataMeBlindWoman,
      header: `${text.headerBlindWoman}`,
    },
    {
      folder: "tiny sensibility",
      data: dataTinySensibility,
      header: `${text.headerTinySensibility}`,
    },
    {
      folder: "pure happiness",
      data: dataPureHappiness,
      header: `${text.headerPureHappiness}`,
    },
    {
      folder: "ephemerally",
      data: dataEphemerally,
      header: `${text.headerEphemerally}`,
    },
  ];

  const sections = sectionsData.map((sectionData, i) => (
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
