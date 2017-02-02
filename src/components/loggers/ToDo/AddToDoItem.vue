<template>
  <div class="addtodoitem">
    <form class="form-inline">
      <label class="sr-only" for="inlineFormInput">Add Task</label>
      <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Add Task">
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddToDoItem',
  };
</script>

<style scoped lang="scss">

</style>
