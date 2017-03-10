<template>
  <div class="ToDoLogger">
    <div class="header">
      <h3>To Do</h3>
      {{ status }}
    </div>
    <addToDoItem></addToDoItem>
    <ToDoItems></ToDoItems>
  </div>
</template>

<script>
  import addToDoItem from './ToDo/AddToDoItem';
  import ToDoItems from './ToDo/ToDoItems';

  export default {
    name: 'ToDoLogger',
    computed: {
      status() {
        return this.$store.state.todosModule.status;
      },
    },
    components: {
      addToDoItem,
      ToDoItems,
    },
  };
</script>

<style scoped lang="scss">

</style>
