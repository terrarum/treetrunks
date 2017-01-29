<template>
  <div class="logMain">
    <div class="row">
      <div class="col-sm-4">
        <NoteLogger></NoteLogger>
      </div>
      <div class="col-sm-4">
        <ToDoLogger></ToDoLogger>
      </div>
      <div class="col-sm-4">
        <TimeLogger></TimeLogger>
      </div>
    </div>
  </div>
</template>

<script>
  import NoteLogger from './loggers/NoteLogger';
  import ToDoLogger from './loggers/ToDoLogger';
  import TimeLogger from './loggers/TimeLogger';

  export default {
    name: 'log',
    components: {
      NoteLogger,
      ToDoLogger,
      TimeLogger,
    },
  };
</script>

<style scoped lang="scss">

</style>
