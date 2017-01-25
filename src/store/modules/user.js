const init = function init() {
  // Set the initial state.
  const initialState = {
    userData: null,
  };

  const mutations = {
    REGISTER(state, user) {
      const tempState = state;
      tempState.userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
      };
    },

    SIGNIN(state, user) {
      const tempState = state;
      tempState.userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
      };
    },

    SIGNOUT(state) {
      const tempState = state;
      tempState.userData = null;
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
