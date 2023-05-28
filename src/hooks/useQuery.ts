import { useLocation } from "react-router-dom";

const useQuery = () => {
  const location = useLocation();

  type QuerObjType = {
    [key: string]: string;
    section: string;
    painting: string;
  };

  const queryObj: QuerObjType = { section: "", painting: "" };

  // transform location search string into object with queries
  location.search
    .split("?")
    .filter((str) => str !== "")
    .forEach((queryStr) => {
      const queryArr = queryStr.split("=");
      queryObj[queryArr[0]] = queryArr[1];
    });

  return queryObj;
};

export default useQuery;
