// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App';
import Store from './store/store';
import Firebase from './firebase';

import HomePageComponent from './components/HomePage';
import LogPageComponent from './components/LogPage';

Vue.use(Vuex);
Vue.use(VueRouter);

const firebaseInstance = Firebase.getInstance();
const store = Store.init(Vuex);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePageComponent,
      name: 'Home',
    },
    {
      path: '/log',
      component: LogPageComponent,
      name: 'Log',
      beforeEnter(to, from, next) {
        if (store.state.userModule.user === null) {
          next(false);
        } else {
          next();
        }
      },
    },
  ],
});

// Receive initial data from Firebase.
const getInitialData = function getInitialData() {
  const notesRef = firebaseInstance.database().ref(`loggers/${store.state.userModule.user.uid}/notes`);
  notesRef.once('value').then((snapshot) => {
    store.commit('UPDATE_NOTES', snapshot.val());
  });
};

// General user auth. TODO find somewhere better for this.
firebaseInstance.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('SIGNIN', user);
    router.push({ name: 'Log' });
    getInitialData();
  } else {
    store.commit('SIGNOUT');
    router.push({ name: 'Home' });
  }
}, (error) => {
  console.log('AuthStateChangeError:', error);
});

// Subscribe to store events.
store.subscribe((mutation, state) => {
  if (mutation.type === 'UPDATE_NOTES') {
    const notesRef = firebaseInstance.database().ref(`loggers/${state.userModule.user.uid}/notes`);
    notesRef.set(mutation.payload);
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
});
