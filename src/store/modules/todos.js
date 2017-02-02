const init = function init() {
  // Set the initial state.
  const initialState = {
    todos: [],
  };

  const mutations = {
    SET_TODOS(state, todos) {
      const tempState = state;
      tempState.todos = todos;
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
