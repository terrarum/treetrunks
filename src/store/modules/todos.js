import TodoModel from '../../models/TodoModel';

const init = function init() {
  // Set the initial state.
  const initialState = {
    todos: [],
  };

  const mutations = {
    READ_TODOS(state, todos) {
      if (todos === null) return;
      const tempState = state;
      tempState.todos = todos;
    },
    CREATE_TODO(state, todo) {
      const tempState = state;
      const model = new TodoModel(todo);
      tempState.todos.push(model);
    },
    DELETE_TODO(state, itemIndex) {
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
