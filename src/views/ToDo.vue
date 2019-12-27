<template>
  <div class="todo">
    <to-do-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue';

export default {
  name: 'todo',
  components: {
    ToDoList,
  },
};
</script>
