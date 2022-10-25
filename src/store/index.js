const { createStore } = require("redux");

const reducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    }
}

const store = createStore(reducer);

export default store;