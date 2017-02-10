<template>
  <div class="todoitems list-group">
    <toDoItem v-for="item in items" v-bind:item="item"></toDoItem>
  </div>
</template>

<script>
  import toDoItem from './ToDoItem';

  export default {
    name: 'ToDoItem',
    computed: {
      items() {
        return this.$store.state.todosModule.todos;
      },
    },
    components: {
      toDoItem,
    },
  };
</script>

<style scoped lang="scss">

</style>
