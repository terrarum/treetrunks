<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link :to="rootRoute.path" class="navbar-brand" exact>Treetrunks</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="route in routes">
          <router-link :to="route.path" class="nav-link" exact>{{ route.name }}</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" v-if="isLoggedIn">
        <SignOutComponent></SignOutComponent>
      </form>
    </div>
  </nav>
</template>

<script>
  import SignOutComponent from './auth/SignOut';

  export default {
    name: 'Navbar',
    props: [
      'routes',
    ],
    computed: {
      rootRoute() {
        return this.routes[0];
      },
      isLoggedIn() {
        return this.$store.state.userModule.user !== null;
      },
    },
    components: {
      SignOutComponent,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/variables.scss';

  .navbar-brand.router-link-active {
    background-color: unset;
  }
  .router-link-active {
    background-color: white;
  }

  .navbar {
    margin-bottom: $default-spacer;
  }
</style>
