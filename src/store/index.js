import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

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
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
