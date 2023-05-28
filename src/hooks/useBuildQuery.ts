const useBuildQuery = () => {
  const buildQuery = (folder: string, painting: string) => {
    return `?section=${folder}?painting=${painting}`;
  };

  return buildQuery;
};

export default useBuildQuery;
