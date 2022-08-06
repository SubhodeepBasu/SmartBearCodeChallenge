import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import UniquePath from "./UniquePath";
import classes from "./UserPathData.module.css";
const UserPathData = () => {
  const userPaths = useSelector((state) => state.paths.userPaths);
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
      <div className={classes.userPath}>
        <ul>
          {userPaths.map((path) => (
            <li key={Math.random()}>
              <h3 onClick={uniquePathHandler.bind(this, path[1], path[0])}>
                {path[0]}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      {uniquePathVisible && (
        <div className={classes.userPathDetails}>
          <button onClick={closePathDetailsHandler}>close path details</button>
          <h1>{uniquePathName}</h1>
          <UniquePath uniquePathData={uniquePathData} />
        </div>
      )}
    </Fragment>
  );
};

export default UserPathData;
