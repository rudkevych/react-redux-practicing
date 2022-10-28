import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0
};

const initialAuthState = {
  isAuthenticated: false
}

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

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

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
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});


export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
