// Receive initial data from Firebase.
const getInitialData = function getInitialData(firebase, store) {
  const notesRef = firebase.database().ref(`loggers/${store.state.userModule.user.uid}/notes`);
  const todosRef = firebase.database().ref(`loggers/${store.state.userModule.user.uid}/todos`);

  notesRef.once('value').then((snapshot) => {
    store.commit('READ_NOTES', snapshot.val());
  });

  todosRef.once('value').then((snapshot) => {
    const val = snapshot.val();
    const arr = [];

    // Convert response back to an array of TodoModels.
    Object.keys(val).forEach((key) => {
      arr.push(val[key]);
    });

    store.commit('READ_TODOS', arr);
  });
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
