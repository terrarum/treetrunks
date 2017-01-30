// Receive initial data from Firebase.
const getInitialData = function getInitialData(firebase, store) {
  const notesRef = firebase.database().ref(`loggers/${store.state.userModule.user.uid}/notes`);
  const todosRef = firebase.database().ref(`loggers/${store.state.userModule.user.uid}/todos`);

  notesRef.once('value').then((snapshot) => {
    store.commit('UPDATE_NOTES', snapshot.val());
  });

  todosRef.once('value').then((snapshot) => {
    store.commit('UPDATE_TODOS', snapshot.val());
  });
};

const init = function init(vue, firebase) {
  const router = vue.$router;
  const store = vue.$store;

  // General user auth. TODO find somewhere better for this.
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