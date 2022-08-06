import infoSlice from "../store/StoreInfoSlice";

describe("Info Reducer", () => {
  it("should return the initial state when empty action is passed", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = infoSlice.reducer(initialState, action);
    expect(result).toEqual({ info: null, isLoading: false, error: null });
  });
  it("should replace previous info", () => {
    const initialState = { info: null, isLoading: false, error: null };
    const action = infoSlice.actions.updateInfo("hello");
    const result = infoSlice.reducer(initialState, action);
    expect(result.info).toEqual("hello");
  });
  it("should replace previous isLoading", () => {
    const initialState = { info: null, isLoading: false, error: null };
    const action = infoSlice.actions.updateIsLoading(true);
    const result = infoSlice.reducer(initialState, action);
    expect(result.isLoading).toEqual(true);
  });
  it("should replace previous error", () => {
    const initialState = { info: null, isLoading: false, error: "404 error" };
    const action = infoSlice.actions.updateError("403 error");
    const result = infoSlice.reducer(initialState, action);
    expect(result.error).toEqual("403 error");
  });
});
