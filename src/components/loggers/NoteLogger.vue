<template>
  <div class="NoteLogger">
    <div class="header">
      <h3 class="title">Notes</h3>
      <div class="ajaxstatus">{{ ajaxstatus }}</div>
    </div>
    <textarea name="Notes" class="textarea" :value="notes" @input="updateNotes"></textarea>
  </div>
</template>

<script>
  import { debounce } from 'lodash';

  const updateNotesDebounced = debounce((store, e) => {
    store.dispatch('UPDATE_NOTES', e.target.value);
  }, 1000);

  export default {
    name: 'NoteLogger',
    computed: {
      notes() {
        return this.$store.state.notesModule.notes;
      },
      ajaxstatus() {
        return 'spinning';
      },
    },
    methods: {
      updateNotes(e) {
        updateNotesDebounced(this.$store, e);
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
