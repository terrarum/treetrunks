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
    UPDATE_TODO(state, payload) {
      const tempState = state;
      const todosIterator = tempState.todos.entries();
      for (const item of todosIterator) {
        const key = item[0];
        const value = item[1];
        if (value.id === payload.itemId) {
          tempState.todos[key].updateDate = Date.now();
          tempState.todos[key].task = payload.value;
          break;
        }
      }
    },
    DELETE_TODO(state, itemId) {
      const tempState = state;
      const todosIterator = tempState.todos.entries();
      for (const item of todosIterator) {
        const key = item[0];
        const value = item[1];
        if (value.id === itemId) {
          tempState.todos.splice(key, 1);
          break;
        }
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
