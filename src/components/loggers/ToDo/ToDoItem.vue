<template>
  <div class="todoitem list-group-item">
    <div class="d-flex w-100 justify-content-end">
      <small class="d-flex">Created at {{ item.creationDate | dateformat }}</small>
      <button class="btn btn-danger btn-sm" v-on:click="deleteTodo">Delete</button>
    </div>
    <input class="todoContent form-control" v-on:keydown="updateTodo" :value="item.task" />
  </div>
</template>

<script>
  export default {
    name: 'ToDoItem',
    props: ['item'],
    methods: {
      deleteTodo() {
        this.$store.dispatch('todosModule/DELETE_TODO', this.item.id);
      },
      updateTodo(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
          event.preventDefault();
          const itemId = this.item.id;
          const value = event.target.value;
          this.$store.dispatch('todosModule/UPDATE_TODO', { itemId, value });
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .todoContent {
    width: 100%;
  }
</style>
