const init = function init() {
  // Set the initial state.
  const initialState = {
    todos: [],
  };

  const mutations = {
    SET_TODOS(state, todos) {
      if (todos === null) return;
      const tempState = state;
      console.log(todos);
      tempState.todos = todos;
    },
    ADD_ITEM(state, item) {
      const tempState = state;
      tempState.todos.push(item);
    },
    REMOVE_ITEM(state, itemIndex) {
      const tempState = state;
      if (itemIndex > -1) {
        tempState.todos.splice(itemIndex, 1);
      }
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
