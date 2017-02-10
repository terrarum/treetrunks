<template>
  <div class="todoitem list-group-item">
    <div class="d-flex w-100 justify-content-end">
      <small class="d-flex">Created at {{ item.creationDate | dateformat }}</small>
    </div>
    {{ item.task }}
  </div>
</template>

<script>
  export default {
    name: 'ToDoItem',
    props: ['item'],
  };
</script>

<style scoped lang="scss">

</style>
