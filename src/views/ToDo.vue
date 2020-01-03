<template>
  <div class="todo">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="8">
          <h1>{{ user.email }}</h1>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="7">
          <v-text-field v-model="newItem" placeholder="New To Do"/>
        </v-col>
        <v-col cols="1">
          <v-btn @click="addItem">Add</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <to-do-list :todos="todos" @delete="deleteItem"/>
  </div>
</template>

<script>
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
  computed: {
    user() {
      return this.$store.getters.getUserInfo;
    },
  },
  methods: {
    addItem() {
      if (this.newItem === '') { return; }
      let newId = 0;
      if (this.todos.length > 0) {
        newId = this.todos[this.todos.length - 1].id + 1;
      }
      this.todos.push({ id: newId, title: this.newItem });
      this.newItem = '';
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    },
  },
  components: {
    ToDoList,
  },
};
</script>
