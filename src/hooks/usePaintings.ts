import { useNavigate } from "react-router-dom";
import useBuildQuery from "./useBuildQuery";
import useAllSections from "./useAllSections";
import useCurrent from "./useCurrent";

const usePaintings = () => {
  const navigate = useNavigate();
  const buildQuery = useBuildQuery();

  const allSectionsData = useAllSections();
  const { curSection, curPaintingIndex, curSectionIndex, curPainting } =
    useCurrent();

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
        buildQuery(nextSectionObj.folder, nextSectionObj.data[0].fileName)
      );
    } else {
      const nextPainting = curSection.data[curPaintingIndex + 1];
      navigate(buildQuery(curSection.folder, nextPainting.fileName));
    }
  };

  const prevSlide = () => {
    if (curPaintingIndex === 0) {
      const prevSectionObj = prevSection();
      navigate(
        buildQuery(
          prevSectionObj.folder,
          prevSectionObj.data[prevSectionObj.data.length - 1].fileName
        )
      );
    } else {
      const nextPainting = curSection.data[curPaintingIndex - 1];
      navigate(buildQuery(curSection.folder, nextPainting.fileName));
    }
  };

  return {
    allSectionsData,
    curSection,
    curPainting,
    curPaintingIndex,
    nextSlide,
    prevSlide,
  };
};

export default usePaintings;
