<template>
  <div class="todoitem">
    {{ item }}
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
