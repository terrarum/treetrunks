// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App';
import Store from './store/store';
import Firebase from './firebase';

import HomepageComponent from './components/Homepage';
import HelloComponent from './components/Hello';

Vue.use(Vuex);
Vue.use(VueRouter);

const firebaseInstance = Firebase.getInstance();
const store = Store.init(Vuex, firebaseInstance);

// General user auth.
firebaseInstance.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('SIGNIN', user);
  } else {
    store.commit('SIGNOUT');
  }
});

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomepageComponent,
      name: 'Home',
    },
    {
      path: '/hello',
      component: HelloComponent,
      name: 'Hello',
    },
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
});
