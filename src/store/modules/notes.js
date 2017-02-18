import Firebase from '../../firebase';

const init = function init() {
  // Set the initial state.
  const initialState = {
    notes: '',
  };

  // Firebase instance.
  const firebase = Firebase.getInstance();
  const userId = firebase.auth().currentUser.uid;
  const notesRef = firebase.database().ref(`loggers/${userId}/notes`);

  const mutations = {
    READ_NOTES(state, text) {
      const tempState = state;
      tempState.notes = text;
    },
    UPDATE_NOTES(state, text) {
      const tempState = state;
      tempState.notes = text;
    },
  };

  const actions = {
    READ_NOTES(context) {
      notesRef.once('value').then((snapshot) => {
        context.commit('READ_NOTES', snapshot.val());
      });
    },
  };

  return {
    state: initialState,
    mutations,
    actions,
  };
};

export default {
  init,
};
