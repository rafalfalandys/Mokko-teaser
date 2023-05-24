import { filenames } from "../assets/paintingObjects";
import { getDataFromFiles } from "../helper";
import "./Main.scss";
import PaintingCard from "./PaintingCard";

const Main: React.FC = () => {
  const paintingsCards = getDataFromFiles(filenames).map((paintingData, i) => {
    return <PaintingCard paintingData={paintingData} key={i} />;
  });

  return <main className="main">{paintingsCards}</main>;
};

export default Main;
