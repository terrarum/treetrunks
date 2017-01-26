<template>
  <div class="auth-registration">
    <div>
      Registration
    </div>
    <div>
      <form>
        <input v-model="email" type="email" id="auth-email" placeholder="email address">
        <input v-model="password" type="password" id="auth-password" placeholder="password">
        <button v-on:click.prevent="register">REGISTER</button>
      </form>
    </div>
    <div>
      Email is <span v-if="isValidEmail">valid</span><span v-else>invalid</span>.
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
    name: 'auth-register',
    data,
    computed: {
      isValidEmail: function isValidEmail() {
        const re = /.+@.+\..+/;
        return this.email.match(re);
      },
    },
    methods: {
      register() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  .auth-registration {
    border-top: $divider-border-width solid black;
    border-bottom: $divider-border-width solid black;
    padding: 10px 0;
  }
</style>
