const getGroupedPathList = (pathType, paths) => {
  let pathArray = [];
  paths.forEach((path) => {
    const pathId = path[0];
    if (pathId.startsWith(pathType)) {
      pathArray.push(path);
    }
  });
  return pathArray;
};

export { getGroupedPathList };
