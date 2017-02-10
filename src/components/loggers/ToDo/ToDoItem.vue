<template>
  <div class="todoitem list-group-item">
    <div class="d-flex w-100 justify-content-end">
      <small class="d-flex">Created at {{ item.creationDate | dateformat }}</small>
      <button class="btn btn-danger btn-sm" v-on:click="deleteTodo">Delete</button>
    </div>
    <input class="todoContent form-control" v-on:keydown="updateTodo" :value="item.task"></input>
  </div>
</template>

<script>
  export default {
    name: 'ToDoItem',
    props: ['item'],
    methods: {
      deleteTodo() {
        this.$store.commit('DELETE_TODO', this.item.id);
      },
      updateTodo(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
          event.preventDefault();
          const value = event.target.value;
          this.$store.commit('UPDATE_TODO', { itemId: this.item.id, value });
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .todoContent {
    width: 100%;

  }

  .todoContent:focus {

  }
</style>
