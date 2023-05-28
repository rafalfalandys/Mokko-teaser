import {
  dataEphemerally,
  dataMeBlindWoman,
  dataPureHappiness,
  dataTinySensibility,
} from "../assets/paintingObjects";
import useText from "./useText";

const usePaintings = () => {
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

  return sectionsData;
};

export default usePaintings;
