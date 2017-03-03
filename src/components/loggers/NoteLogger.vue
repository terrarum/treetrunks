<template>
  <div class="NoteLogger">
    <div class="header">
      <h3 class="title">Notes</h3>
      <div class="ajaxstatus">{{ status }}</div>
    </div>
    <textarea name="Notes" class="textarea" :value="notes" @input="updateNotes"></textarea>
  </div>
</template>

<script>
  import { debounce } from 'lodash';

  const updateNotesDebounced = debounce((store, data) => {
    store.dispatch('UPDATE_NOTES', data);
  }, 1000);

  export default {
    name: 'NoteLogger',
    data: function data() {
      return {
        statusValue: '...',
      };
    },
    computed: {
      notes() {
        return this.$store.state.notesModule.notes;
      },
      status() {
        return this.statusValue;
      },
    },
    methods: {
      updateNotes(e) {
        updateNotesDebounced(this.$store, {
          component: this,
          value: e.target.value,
        });
      },
    },
  };
</script>

<style scoped lang="scss">
  .textarea {
    width: 100%;
    min-height: 600px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
</style>
