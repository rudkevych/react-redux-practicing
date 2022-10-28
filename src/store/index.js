import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

// old version
// const reducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   return {
//     counter: state.counter + 1,
//   };
// };

const store = configureStore({
  reducer: {counter: counterSlice.reducer}
});


export const counterActions = counterSlice.actions;
export default store;
