<template>
  <v-container>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <to-do-item :title="todo.title"/>
      </li>
    </ul>
  </v-container>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue';

export default {
  name: 'ToDoList',
  components: {
    ToDoItem,
  },
  data() {
    return {
      todos: [
        { id: 1, title: 'test1' },
        { id: 2, title: 'test2' },
      ],
    };
  },
};
</script>

<style scoped>
  ul {
    padding: 0;
  }
  ul li {
    list-style: none;
    margin-right: auto;
  }
</style>
