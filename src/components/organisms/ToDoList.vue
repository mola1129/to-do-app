<template>
  <v-container>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <to-do-item
          :title="todo.title"
          @clickDeleteButton="deleteItem(todo.id)"
        />
      </li>
    </ul>
  </v-container>
</template>

<script>
import ToDoItem from '@/components/molecules/ToDoItem.vue';

export default {
  name: 'ToDoList',
  components: {
    ToDoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteItem(todoId) {
      this.$emit('delete', todoId);
    },
  },
};
</script>

<style scoped>
  ul {
    padding-left: 0 !important;
  }
  ul li {
    list-style: none;
    margin-right: auto;
  }
</style>
