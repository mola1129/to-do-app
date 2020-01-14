<template>
  <v-container>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <to-do-item
          :title="todo.title"
          @delete="deleteItem(todo.id)"
        />
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
    deleteItem(todoId) {
      this.$emit('delete', todoId);
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
