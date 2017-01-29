import Firebase from 'firebase';

// Firebase config.
const firebaseConfig = {
  apiKey: 'AIzaSyDLhdScznyWx2VUqz1lb_4HqkpZ0eoJjbI',
  authDomain: 'treetrunks-2e4ef.firebaseapp.com',
  databaseURL: 'https://treetrunks-2e4ef.firebaseio.com',
};

let instance = false;

const getInstance = function init() {
  // Set up Firebase.
  if (!instance) {
    instance = Firebase.initializeApp(firebaseConfig);
  }

  return instance;
};

export default {
  getInstance,
};
