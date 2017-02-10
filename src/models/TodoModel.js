export default function (task) {
  return {
    id: '',
    creationDate: Date.now(),
    updateDate: '',
    isDone: false,
    isArchived: false,
    task,
  };
}
