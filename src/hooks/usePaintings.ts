import {
  dataEphemerally,
  dataMeBlindWoman,
  dataPureHappiness,
  dataTinySensibility,
} from "../assets/paintingObjects";
import useQuery from "./useQuery";
import useText from "./useText";

const usePaintings = () => {
  const text = useText();
  const queryObj = useQuery();

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

  // finding section in all paintings basing on query
  const section = sectionsData.filter(
    (section) => section.folder === decodeURI(queryObj.section)
  )[0];

  // fainding painting within section basing on query
  const paintingData = section
    ? section.data.filter(
        (painting) => painting.paintingTitle === decodeURI(queryObj.painting)
      )[0]
    : undefined;

  return { sectionsData, section, paintingData };
};

export default usePaintings;
