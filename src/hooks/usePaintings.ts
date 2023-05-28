import { useNavigate } from "react-router-dom";
import {
  dataEphemerally,
  dataMeBlindWoman,
  dataPureHappiness,
  dataTinySensibility,
} from "../assets/paintingObjects";
import useQuery from "./useQuery";
import useText from "./useText";
import useBuildQuery from "./useBuildQuery";

const usePaintings = () => {
  const text = useText();
  const queryObj = useQuery();
  const navigate = useNavigate();
  const buildQuery = useBuildQuery();

  const allSectionsData = [
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
  const curSection = allSectionsData.filter(
    (section) => section.folder === decodeURI(queryObj.section)
  )[0];

  // fainding painting within section basing on query
  const paintingData = curSection
    ? curSection.data.filter(
        (painting) => painting.paintingTitle === decodeURI(queryObj.painting)
      )[0]
    : undefined;

  // section and painting index
  const curSectionIndex = curSection
    ? allSectionsData.findIndex((sectionObj) => {
        return sectionObj.folder === curSection.folder;
      })
    : 0;

  const curPaintingIndex = curSection?.data.findIndex(
    (painting) => painting.paintingTitle === paintingData?.paintingTitle
  );

  // next / previous slide
  const nextSection = () => {
    if (curSectionIndex === allSectionsData.length - 1) {
      return allSectionsData[0];
    } else {
      return allSectionsData[curSectionIndex + 1];
    }
  };

  const prevSection = () => {
    if (curSectionIndex === 0)
      return allSectionsData[allSectionsData.length - 1];
    else return allSectionsData[curSectionIndex - 1];
  };

  const nextSlide = () => {
    if (curPaintingIndex === curSection.data.length - 1) {
      const nextSectionObj = nextSection();
      navigate(
        buildQuery(nextSectionObj.folder, nextSectionObj.data[0].paintingTitle)
      );
    } else {
      const nextPainting = curSection.data[curPaintingIndex + 1];
      navigate(buildQuery(curSection.folder, nextPainting.paintingTitle));
    }
  };

  const prevSlide = () => {
    if (curPaintingIndex === 0) {
      const prevSectionObj = prevSection();
      navigate(
        buildQuery(
          prevSectionObj.folder,
          prevSectionObj.data[prevSectionObj.data.length - 1].paintingTitle
        )
      );
    } else {
      const nextPainting = curSection.data[curPaintingIndex - 1];
      navigate(buildQuery(curSection.folder, nextPainting.paintingTitle));
    }
  };

  return {
    allSectionsData,
    curSection,
    paintingData,
    curPaintingIndex,
    nextSlide,
    prevSlide,
  };
};

export default usePaintings;
