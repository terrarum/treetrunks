const init = function init() {
  // Set the initial state.
  const initialState = {
    notes: '',
  };

  const mutations = {
    SET_NOTES(state, text) {
      const tempState = state;
      tempState.notes = text;
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
