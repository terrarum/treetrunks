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
      notesModule: notesModule.init(),
      todosModule: todosModule.init(),
    },
    strict: debug,
  });

  return store;
};

export default {
  init,
};
