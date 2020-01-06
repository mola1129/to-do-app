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
import Firebase from '@/firebase';

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
      console.log(`uid: ${this.user.uid}`);
      Firebase.addTodoItem(this.user.uid, this.newItem);
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
