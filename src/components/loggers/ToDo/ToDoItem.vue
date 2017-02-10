<template>
  <div class="todoitem list-group-item">
    <div class="d-flex w-100 justify-content-end">
      <small class="d-flex">Created at {{ item.creationDate | dateformat }}</small>
      <button class="btn btn-danger btn-sm" v-on:click="deleteTodo">Delete</button>
    </div>
    {{ item.task }}
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
    },
  };
</script>

<style scoped lang="scss">

</style>
