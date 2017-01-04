<template>
  <v-app top-navbar>
    <header>
      <v-navbar></v-navbar>
    </header>
    <main>
      <v-content>
        <v-container>
          <v-card class="green">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam animi atque cum cumque dignissimos doloremque eum, explicabo id iusto magnam nemo neque nisi obcaecati quidem quod ratione repellat temporibus!
            </v-card-text>
          </v-card>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
