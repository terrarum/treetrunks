import NoteLogger from '../components/loggers/NoteLogger';

// Receive initial data from Firebase.
const getInitialData = function getInitialData(firebase, store) {
  store.dispatch('notesModule/READ_NOTES', { component: NoteLogger });
  store.dispatch('todosModule/READ_TODOS');
};

const init = function init(vue, firebase) {
  const router = vue.$router;
  const store = vue.$store;

  // General user auth.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.commit('SIGNIN', user);
      router.push({ name: 'Log' });
      getInitialData(firebase, store);
    }
    else {
      store.commit('SIGNOUT');
      router.push({ name: 'Home' });
    }
  }, (error) => {
    console.log('AuthStateChangeError:', error);
  });
};

export default {
  init,
};
