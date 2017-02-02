<template>
  <div class="ToDoLogger">
    <h3>To Do</h3>
    <addToDoItem></addToDoItem>
    <toDoItems></toDoItems>
  </div>
</template>

<script>
  import addToDoItem from './ToDo/AddToDoItem';
  import toDoItems from './ToDo/ToDoItems';

  export default {
    name: 'ToDoLogger',
    components: {
      addToDoItem,
      toDoItems,
    },
  };
</script>

<style scoped lang="scss">

</style>
