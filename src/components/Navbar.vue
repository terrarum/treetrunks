<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link :to="rootRoute.path" class="navbar-brand">Treetrunks</router-link>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="route in routes">
          <router-link :to="route.path" class="nav-link">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    props: [
      'routes',
    ],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    computed: {
      rootRoute() {
        return this.routes[0];
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
