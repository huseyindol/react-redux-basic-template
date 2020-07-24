/**
 *
 * Header
 *
 */

import { createSlice } from "@reduxjs/toolkit";

export const HeaderSlice = createSlice({
  name: "Header",
  initialState: {},
  reducers: {},
});

export const {} = HeaderSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
// setTimeout(() => {
// dispatch(incrementByAmount(amount));
// }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.Header.value)`
export const selectHeader = (state) => state.Header;

export default HeaderSlice.reducer;
