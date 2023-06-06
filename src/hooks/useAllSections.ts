import {
  CardType,
  dataEphemerally,
  dataMeBlindWoman,
  dataPureHappiness,
  dataTinySensibility,
} from "../assets/paintingObjects";
import useText from "./useText";

type AllSectionsData = {
  folder: string;
  data: CardType[];
  header: string;
  description: { __html: string | TrustedHTML };
};

const useAllSections = () => {
  const text = useText();

  const allSectionsData: AllSectionsData[] = [
    {
      folder: "me blind woman",
      data: dataMeBlindWoman,
      header: `${text.headerMeBlindWoman}`,
      description: text.textMeBlindWoman,
    },
    {
      folder: "tiny sensibility",
      data: dataTinySensibility,
      header: `${text.headerTinySensibility}`,
      description: text.textTinySensibility,
    },
    {
      folder: "pure happiness",
      data: dataPureHappiness,
      header: `${text.headerPureHappiness}`,
      description: text.textPureHappiness,
    },
    {
      folder: "ephemerally",
      data: dataEphemerally,
      header: `${text.headerEphemerally}`,
      description: text.textEphemerally,
    },
  ];

  return allSectionsData;
};

export default useAllSections;
