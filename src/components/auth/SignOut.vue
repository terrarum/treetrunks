<template>
  <button v-on:click="signOut">Sign out</button>.
</template>

<script>
  import Firebase from '../../firebase';

  const firebase = Firebase.getInstance();

  export default {
    name: 'app',
    props: ['core'],
    methods: {
      signOut: function signOut() {
        firebase.auth().signOut().then(() => {
          this.$store.commit('SIGNOUT');
        }, (error) => {
          console.log('Sign Out Failure:', error);
        });
      },
    },
  };
</script>

<style lang="scss">

</style>
