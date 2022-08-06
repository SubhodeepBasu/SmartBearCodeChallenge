import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import UniquePath from "./UniquePath";
import classes from "./StorePathData.module.css";
const StorePathData = () => {
  const storePaths = useSelector((state) => state.paths.storePaths);
  const [uniquePathData, setUniquePathData] = useState(null);
  const [uniquePathVisible, setUniquePathVisible] = useState(false);
  const [uniquePathName, setUniquePathName] = useState(null);
  const uniquePathHandler = (uPath, uPathName) => {
    setUniquePathVisible(true);
    setUniquePathData(uPath);
    setUniquePathName(uPathName);
  };
  const closePathDetailsHandler = () => {
    setUniquePathVisible(false);
    setUniquePathData(null);
    setUniquePathName(null);
  };
  return (
    <Fragment>
      <div className={classes.storePath}>
        <ul>
          {storePaths.map((path) => (
            <li key={Math.random()}>
              <h3 onClick={uniquePathHandler.bind(this, path[1], path[0])}>
                {path[0]}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      {uniquePathVisible && (
        <div className={classes.storePathDetails}>
          <button onClick={closePathDetailsHandler}>close path details</button>
          <h1>{uniquePathName}</h1>

          <UniquePath uniquePathData={uniquePathData} />
        </div>
      )}
    </Fragment>
  );
};

export default StorePathData;
