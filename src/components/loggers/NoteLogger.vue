<template>
  <div class="NoteLogger">
    <h3>Notes</h3>
    <AjaxStatus></AjaxStatus>
    <textarea name="Notes" class="textarea" :value="notes" @input="updateNotes"></textarea>
  </div>
</template>

<script>
  import { debounce } from 'lodash';
  import AjaxStatus from '../AjaxStatus';

  const updateNotesDebounced = debounce((store, e) => {
    store.dispatch('UPDATE_NOTES', e.target.value);
  }, 1000);

  export default {
    name: 'NoteLogger',
    computed: {
      notes() {
        return this.$store.state.notesModule.notes;
      },
    },
    methods: {
      updateNotes(e) {
        updateNotesDebounced(this.$store, e);
      },
    },
    components: {
      AjaxStatus,
    },
  };
</script>

<style scoped lang="scss">
  .textarea {
    width: 100%;
    min-height: 600px;
  }
</style>
