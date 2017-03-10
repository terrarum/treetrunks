import Firebase from '../../firebase';

const init = function init() {
  // Set the initial state.
  const initialState = {
    notes: '',
    status: '',
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
    UPDATE_STATUS(state, text) {
      const tempState = state;
      tempState.status = text;
    },
  };

  const actions = {
    READ_NOTES(context) {
      // payloadTemp.component.status = 'Reading...';
      notesRef.once('value').then((snapshot) => {
        // payloadTemp.component.status = 'Read.';
        context.commit('READ_NOTES', snapshot.val());
      });
    },
    UPDATE_NOTES(context, payload) {
      const payloadTemp = payload;
      const oldValue = context.state.notes;
      context.commit('UPDATE_STATUS', 'Sending...');
      // Optimistic update.
      context.commit('UPDATE_NOTES', payloadTemp.value);
      notesRef.set(payloadTemp.value).then(
        () => { // Success.
          context.commit('UPDATE_STATUS', 'Sent.');
        },
        () => { // Failure. Revert if Firebase has failed to save data.
          context.commit('UPDATE_STATUS', 'Failed.');
          context.commit('UPDATE_NOTES', oldValue);
        }
      );
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
