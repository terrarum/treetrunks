<template>
  <div class="NoteLogger">
    <h3>Notes</h3>
    <textarea name="Notes" class="textarea" :value="notes" @input="updateNotes"></textarea>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'NoteLogger',
    computed: mapState({
      notes: state => state.notesModule.notes,
    }),
    methods: {
      updateNotes(e) {
        this.$store.commit('SET_NOTES', e.target.value);
      },
    },
  };
</script>

<style scoped lang="scss">
  .textarea {
    width: 100%;
    min-height: 600px;
  }
</style>
