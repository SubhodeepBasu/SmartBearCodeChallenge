/*
This Redux Slice holds the state concerned with the Info details of the
Pet Store. It also stores for a loading state and error state for the
HTTP requests sent to the API 
*/
import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "storeInfo",
  initialState: { info: null, isLoading: false, error: null },
  reducers: {
    updateIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateError(state, action) {
      state.error = action.payload;
    },
    updateInfo(state, actions) {
      state.info = actions.payload;
    },
  },
});

export const fetchInfoData = () => {
  return async (dispatch) => {
    const fetchInfo = async () => {
      const response = await fetch(
        "https://petstore.swagger.io/v2/swagger.json"
      );
      if (!response.ok) {
        throw new Error("Some Error Occured!!!");
      }
      const data = await response.json();
      dispatch(infoSlice.actions.updateIsLoading(false));
      dispatch(infoSlice.actions.updateInfo(data.info));
    };

    dispatch(infoSlice.actions.updateIsLoading(true));
    dispatch(infoSlice.actions.updateError(null));
    fetchInfo().catch((error) => {
      dispatch(infoSlice.actions.updateError(error.message));
      dispatch(infoSlice.actions.updateIsLoading(false));
    });
  };
};

export const infoActions = infoSlice.actions;
export default infoSlice;
