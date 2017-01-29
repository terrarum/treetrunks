const init = function init() {
  // Set the initial state.
  const initialState = {
    user: null,
  };

  const mutations = {
    REGISTER(state, user) {
      const tempState = state;
      tempState.user = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
      };
    },

    SIGNIN(state, user) {
      const tempState = state;
      tempState.user = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
      };
    },

    SIGNOUT(state) {
      const tempState = state;
      tempState.user = null;
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
