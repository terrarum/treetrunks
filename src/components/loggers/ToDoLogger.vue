<template>
  <div class="ToDoLogger">
    <h3>To Do</h3>
    <addToDoItem></addToDoItem>
    <ToDoItems></ToDoItems>
  </div>
</template>

<script>
  import addToDoItem from './ToDo/AddToDoItem';
  import ToDoItems from './ToDo/ToDoItems';

  export default {
    name: 'ToDoLogger',
    components: {
      addToDoItem,
      ToDoItems,
    },
  };
</script>

<style scoped lang="scss">

</style>
