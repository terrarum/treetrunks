<template>
  <div class="addtodoitem">
    <form class="form-inline" v-on:submit.prevent="addTodoItem">
      <label class="sr-only" for="inlineFormInput">Add Task</label>
      <input v-model="newTodo" type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Add Task">
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddToDoItem',
    data() {
      return {
        newTodo: '',
      };
    },
    methods: {
      addTodoItem() {
        this.$store.dispatch('CREATE_TODO', this.newTodo);
        this.newTodo = '';
      },
    },
  };
</script>

<style scoped lang="scss">

</style>
