<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <navbar :routes="routes"></navbar>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
