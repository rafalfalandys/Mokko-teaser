import { useContext } from "react";
import { CardType } from "../assets/paintingObjects";
import { emptyPaintingObj } from "../helper";
import useAllSections from "./useAllSections";
import useQuery from "./useQuery";
import Context from "../store/context";

const useCurrent = () => {
  const allSectionsData = useAllSections();
  const queryObj = useQuery();
  const { isEnglish } = useContext(Context);

  // finding section in all paintings basing on query
  const curSection = allSectionsData.filter(
    (section) => section.folder === decodeURI(queryObj.section)
  )[0];

  // fainding painting within section basing on query
  const {
    fileName,
    paintingTitle,
    paintingTitleEN,
    price,
    size,
    technique,
    techniqueEN,
    year,
    priceEN,
  } = curSection
    ? curSection.data.filter(
        (painting) => painting.fileName === decodeURI(queryObj.painting)
      )[0]
    : emptyPaintingObj;

  // internalizing output object
  const curPainting: CardType = curSection
    ? {
        fileName,
        paintingTitle: isEnglish ? paintingTitleEN : paintingTitle,
        paintingTitleEN,
        price: isEnglish ? (priceEN ? priceEN : price) : price,
        size,
        technique: isEnglish ? techniqueEN : technique,
        techniqueEN,
        year,
        priceEN,
      }
    : emptyPaintingObj;

  // section and painting index
  const curSectionIndex = curSection
    ? allSectionsData.findIndex((sectionObj) => {
        return sectionObj.folder === curSection.folder;
      })
    : 0;

  const curPaintingIndex = curSection?.data.findIndex(
    (painting) => painting.fileName === curPainting?.fileName
  );

  return { curSection, curSectionIndex, curPaintingIndex, curPainting };
};

export default useCurrent;
