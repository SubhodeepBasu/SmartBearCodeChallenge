import PathParameters from "./PathParameters";
import PathResponses from "./PathResponses";
import classes from "./UniquePath.module.css";
import { Fragment, useState } from "react";

const UniquePath = (props) => {
  const [showDetails, setShowDetails] = useState(null);
  const uniquePathData = Object.entries(props.uniquePathData);

  const showDetailsHandler = (pathData) => {
    if (showDetails === pathData) {
      setShowDetails(null);
    } else {
      setShowDetails(pathData);
    }
  };

  return (
    <Fragment>
      {uniquePathData.map((pathData) => (
        <div key={pathData[0]} className={classes.uniquePath}>
          <h2>Method: {pathData[0]}</h2>
          <div className={classes.upButton}>
            <button onClick={showDetailsHandler.bind(this, pathData[0])}>
              {showDetails === pathData[0] ? "-" : "+"}
            </button>
          </div>
          {showDetails === pathData[0] && (
            <div>
              <PathParameters parameters={pathData[1].parameters} />
              <PathResponses responses={pathData[1].responses} />
            </div>
          )}
        </div>
      ))}
    </Fragment>
  );
};
export default UniquePath;
