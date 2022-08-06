import { useEffect } from "react";
import InfoData from "./InfoData";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfoData } from "../store/StoreInfoSlice";
const StoreInfoData = () => {
  const info = useSelector((state) => state.info.info);
  const isLoading = useSelector((state) => state.info.isLoading);
  const error = useSelector((state) => state.info.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfoData());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h3>loading info data...</h3>}
      {!isLoading && info && <InfoData storeInfo={info} />}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default StoreInfoData;
