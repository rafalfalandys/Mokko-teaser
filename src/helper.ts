import { PaintingData } from "./types";

export const getDataFromFiles: (
  folder: string,
  filenames: string[]
) => PaintingData[] = (folder, filenames) => {
  const paintingsData = filenames.map((title) => {
    return {
      folder,
      fileName: title,
      paintingTitle: title.split("-")[1].split(",")[0].trim(),
      year: title.split("-")[1].split(",")[1].trim(),
      technique: title.split("-")[1].split(",")[2].trim(),
      size: title.split("-")[1].split(",")[3].trim(),
    };
  });

  return paintingsData;
};

// export const buildQuery = (folder: string, painting: string) => {
//   console.log(painting);
//   return `?section=${folder}?painting=${painting}`;
// };
