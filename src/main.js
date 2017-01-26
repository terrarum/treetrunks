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
const store = Store.init(Vuex, firebaseInstance);

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
        if (store.state.user.userData === null) {
          next(false);
        } else {
          next();
        }
      },
    },
  ],
});

// General user auth. TODO find somewhere better for this.
firebaseInstance.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('SIGNIN', user);
    router.push({ name: 'Log' });
  } else {
    store.commit('SIGNOUT');
    router.push({ name: 'Home' });
  }
}, (error) => {
  console.log('AuthStateChangeError:', error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
});
