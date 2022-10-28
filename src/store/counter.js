const { createSlice } = require('@reduxjs/toolkit');

const initialCounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
