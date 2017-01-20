<template>
  <div class="homepage">
    <p>Homepage</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data() {
    return {
      msg: 'Helcome Wome',
    };
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
