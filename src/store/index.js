const { createStore } = require('redux');

const defaultState = {
  counter: 0,
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return {
    counter: state.counter + 1,
  };
};

const store = createStore(reducer);

export default store;
