import userModule from './modules/user';
import notesModule from './modules/notes';

const debug = process.env.NODE_ENV !== 'production';

// Init Vuex store with Firebase integration.
const init = function init(Vuex) {
  // Create the store.
  const store = new Vuex.Store({
    modules: {
      userModule: userModule.init(),
      notesModule: notesModule.init(),
    },
    strict: debug,
  });

  return store;
};

export default {
  init,
};
