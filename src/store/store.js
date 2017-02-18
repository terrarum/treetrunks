import userModule from './modules/user';
import notesModule from './modules/notes';
import todosModule from './modules/todos';

const debug = process.env.NODE_ENV !== 'production';

// Init Vuex store with Firebase integration.
const init = function init(Vuex) {
  // Create the store.
  const store = new Vuex.Store({
    modules: {
      userModule: userModule.init(),
    },
    strict: debug,
  });

  // If a user has signed in, register user-only modules.
  store.subscribe((mutation) => {
    if (mutation.type === 'SIGNIN') {
      store.registerModule('notesModule', notesModule.init());
      store.registerModule('todosModule', todosModule.init());
    }
  });

  return store;
};

export default {
  init,
};
