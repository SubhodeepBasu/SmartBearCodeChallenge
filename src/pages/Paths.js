import { Outlet } from "react-router-dom";
import PathData from "../components/PathData";

const Paths = () => {
  return (
    <div>
      <PathData />
      <Outlet />
    </div>
  );
};
export default Paths;
