<template>
  <div class="homepage">
    <p>Homepage</p>
    <signin v-if="isNotLoggedIn"></signin>
    <register v-if="isNotLoggedIn"></register>
  </div>
</template>

<script>
  import SignInComponent from './auth/SignIn';
  import RegisterComponent from './auth/Register';

  export default {
    name: 'homepage',
    components: {
      signin: SignInComponent,
      register: RegisterComponent,
    },
    computed: {
      isNotLoggedIn() {
        return this.$store.state.userModule.user === null;
      },
    },
  };
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
