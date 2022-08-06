import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPathData } from "../store/PathSlice";
import classes from "./PathData.module.css";

const PathData = () => {
  const isLoading = useSelector((state) => state.paths.isLoading);
  const error = useSelector((state) => state.paths.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPathData());
  }, [dispatch]);

  return (
    <div className={classes.path}>
      {!isLoading && !error && (
        <ul>
          <li>
            <NavLink
              to="/paths/pet"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Pet Path -
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/paths/store"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Store Path -
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/paths/user"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              User Path -
            </NavLink>
          </li>
        </ul>
      )}
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default PathData;
