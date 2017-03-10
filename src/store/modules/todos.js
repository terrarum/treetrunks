import TodoModel from '../../models/TodoModel';
import Firebase from '../../firebase';

const init = function init() {
  // Set the initial state.
  const initialState = {
    todos: [],
    status: '',
  };

  // Firebase instance.
  const firebase = Firebase.getInstance();
  const userId = firebase.auth().currentUser.uid;
  const todosRef = firebase.database().ref(`loggers/${userId}/todos`);

  const mutations = {
    READ_TODOS(state, todos) {
      if (todos === null) return;
      const tempState = state;
      tempState.todos = todos;
    },
    CREATE_TODO(state, todo) {
      const tempState = state;
      tempState.todos.push(todo);
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
    UPDATE_STATUS(state, text) {
      const tempState = state;
      tempState.status = text;
    },
  };

  const actions = {
    READ_TODOS({ commit }) {
      commit('UPDATE_STATUS', 'Reading...');
      todosRef.once('value').then((snapshot) => {
        commit('UPDATE_STATUS', 'Read.');
        const val = snapshot.val();
        const arr = [];

        if (val !== null && val !== undefined) {
          // Convert response back to an array of TodoModels.
          Object.keys(val).forEach((key) => {
            arr.push(val[key]);
          });
        }

        commit('READ_TODOS', arr);
      });
    },
    CREATE_TODO({ commit }, payload) {
      commit('UPDATE_STATUS', 'Creating...');
      // Create a placeholder item in Firebase.
      const newTodoRef = todosRef.push();
      // Create a new TodoModel.
      const model = new TodoModel(payload);
      // Add the placeholder ID to the new model.
      model.id = newTodoRef.key;
      // Push the new model to Firebase.
      newTodoRef.set(model).then(() => {
        // Update Vuex.
        commit('UPDATE_STATUS', 'Created.');
        commit('CREATE_TODO', model);
      });
    },
    UPDATE_TODO({ commit, state }, payload) {
      commit('UPDATE_STATUS', 'Updating...');
      const todoKey = payload.itemId;
      const todoRef = firebase.database().ref(`loggers/${userId}/todos/${todoKey}`);
      const todosIterator = state.todos.entries();
      for (const item of todosIterator) {
        const value = item[1];
        if (value.id === payload.itemId) {
          const updates = {};
          updates['/task'] = payload.value;
          updates['/updateDate'] = value.updateDate;
          todoRef.update(updates).then(() => {
            commit('UPDATE_STATUS', 'Sent.');
            commit('UPDATE_TODO', payload.value);
            commit('UPDATE_STATUS', 'Updated.');
          });
          break;
        }
      }
    },
    DELETE_TODO(context, payload) {
      context.commit('UPDATE_STATUS', 'Deleting...');
      const todoKey = payload;
      const todoRef = firebase.database().ref(`loggers/${userId}/todos/${todoKey}`);
      todoRef.remove().then(() => {
        context.commit('UPDATE_STATUS', 'Deleted.');
        context.commit('DELETE_TODO', payload);
      });
    },
  };

  return {
    namespaced: true,
    state: initialState,
    mutations,
    actions,
  };
};

export default {
  init,
};
