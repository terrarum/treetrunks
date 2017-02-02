<template>
  <div class="ToDoLogger">
    <h3>To Do</h3>
    <addToDoItem></addToDoItem>
  </div>
</template>

<script>
  import addToDoItem from './ToDo/AddToDoItem';

  export default {
    name: 'ToDoLogger',
    components: {
      addToDoItem,
    },
  };
</script>

<style scoped lang="scss">

</style>
