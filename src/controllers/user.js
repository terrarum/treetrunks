// Receive initial data from Firebase.
const getInitialData = function getInitialData(firebase, store) {
  store.dispatch('READ_NOTES');
  store.dispatch('READ_TODOS');
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
