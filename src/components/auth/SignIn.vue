<template>
  <div class="auth-signin">
    <div>
      Sign In
    </div>
    <div>
      <form>
        <input v-model="email" type="email" id="auth-email" placeholder="email address">
        <input v-model="password" type="password" id="auth-password" placeholder="password">
        <button v-on:click.prevent="signin">SIGN IN</button>
      </form>
    </div>
  </div>
</template>

<script>
  import Firebase from '../../firebase';

  const firebase = Firebase.getInstance();

  const data = function data() {
    return {
      email: '',
      password: '',
    };
  };

  export default {
    name: 'auth-signin',
    data,
    methods: {
      signin() {
        firebase.auth().signInWithEmailAndPassword(
          this.email,
          this.password
        ).then((user) => {
          console.log('Sign In Success:', user);
          this.$store.commit('SIGNIN', user);
        }, (error) => {
          console.log('Sign In Failure:', error);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .auth-signin {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 10px 0;
    margin-bottom: 10px;
  }
</style>
