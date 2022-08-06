/*
This Redux Slice holds the state concerned with the path details of:
Pets, Users and Store. It also stores for a loading state and error state for the
HTTP requests sent to the API 
*/
import { createSlice } from "@reduxjs/toolkit";
import { getGroupedPathList } from "../Helpers/HelperMethods";

const pathSlice = createSlice({
  name: "paths",
  initialState: {
    petPaths: null,
    userPaths: null,
    storePaths: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    updateIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    updateError(state, action) {
      state.error = action.payload;
    },
    updatePetPath(state, actions) {
      state.petPaths = actions.payload;
    },
    updateUserPath(state, actions) {
      state.userPaths = actions.payload;
    },
    updateStorePath(state, actions) {
      state.storePaths = actions.payload;
    },
  },
});

export const fetchPathData = () => {
  return (dispatch) => {
    const fetchPath = async () => {
      const response = await fetch(
        "https://petstore.swagger.io/v2/swagger.json"
      );
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();

      dispatch(pathSlice.actions.updateIsLoading(false));
      dispatch(
        pathSlice.actions.updatePetPath(
          getGroupedPathList("/pet", Object.entries(data.paths))
        )
      );
      dispatch(
        pathSlice.actions.updateStorePath(
          getGroupedPathList("/store", Object.entries(data.paths))
        )
      );
      dispatch(
        pathSlice.actions.updateUserPath(
          getGroupedPathList("/user", Object.entries(data.paths))
        )
      );
    };

    dispatch(pathSlice.actions.updateIsLoading(true));
    dispatch(pathSlice.actions.updateError(null));
    fetchPath().catch((error) => {
      dispatch(pathSlice.actions.updateError(error.message));
      dispatch(pathSlice.actions.updateIsLoading(false));
    });
  };
};

export const pathActions = pathSlice.actions;
export default pathSlice;
