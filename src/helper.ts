import { PaintingData } from "./types";

export const getDataFromFiles: (filenames: string[]) => PaintingData[] = (
  filenames
) => {
  const paintingsData = filenames.map((title) => {
    return {
      fileName: title,
      paintingTitle: title.split("-")[1].split(",")[0].trim(),
      year: title.split("-")[1].split(",")[1].trim(),
      technique: title.split("-")[1].split(",")[2].trim(),
      size: title.split("-")[1].split(",")[3].trim(),
    };
  });

  return paintingsData;
};
