<template>
  <v-container>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        <to-do-item :title="todo.title" @delete="deleteItem(index)"/>
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
  props: ['todos'],
  methods: {
    deleteItem(index) {
      this.$emit('delete', index);
    },
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
