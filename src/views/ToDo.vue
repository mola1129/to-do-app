<template>
  <div class="todo">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="7">
          <v-text-field v-model="newItem" placeholder="New To Do"/>
        </v-col>
        <v-col cols="1">
          <v-btn @click="addItem">Add</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <to-do-list :todos="todos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue';

export default {
  name: 'todo',
  data() {
    return {
      newItem: '',
      todos: [
        { id: 1, title: 'test1' },
        { id: 2, title: 'test2' },
        { id: 3, title: 'test3' },
      ],
    };
  },
  methods: {
    addItem() {
      this.todos.push({ id: this.todos.length + 1, title: this.newItem });
      this.newItem = '';
    },
  },
  components: {
    ToDoList,
  },
};
</script>
