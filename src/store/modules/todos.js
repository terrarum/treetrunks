const init = function init() {
  // Set the initial state.
  const initialState = {
    todos: [],
  };

  const mutations = {
    SET_TODOS(state, todos) {
      if (todos === null) return;
      const tempState = state;
      tempState.todos = todos;
    },
    ADD_ITEM(state, item) {
      const tempState = state;
      tempState.todos.push(item);
    },
  };

  return {
    state: initialState,
    mutations,
  };
};

export default {
  init,
};
