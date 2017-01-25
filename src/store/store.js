import user from './modules/user';

const debug = process.env.NODE_ENV !== 'production';

// Init Vuex store with Firebase integration.
const init = function init(Vuex, firebase) {
  // Add Vuex to Vue.

  // Create the store.
  const store = new Vuex.Store({
    modules: {
      user: user.init(firebase),
    },
    strict: debug,
  });

  return store;
};

export default {
  init,
};
