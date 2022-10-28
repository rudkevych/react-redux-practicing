import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  counterIsVisible: true,
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
    toggle(state) {
      state.counterIsVisible = !state.counterIsVisible;
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

export default store;
