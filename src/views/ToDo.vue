<template>
  <div class="todo">
    <v-container>
      <v-row
        justify="center"
        align="center"
      >
        <v-col cols="8">
          {{ this.getUserInfo.email }}
        </v-col>
      </v-row>
      <AddToDoItemBar @clickAddButton="addItem"/>
    </v-container>
    <to-do-list
      :todos="todos"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { mapGetters } from 'vuex';
import ToDoList from '@/components/organisms/ToDoList.vue';
import Firebase from '@/firebase';
import AddToDoItemBar from '@/components/molecules/AddToDoItemBar.vue';

export default {
  name: 'todo',
  data() {
    return {
      todos: [],
    };
  },
  created() {
    const todosRef = Firebase.getCollectionReference(this.getUserInfo.uid);
    todosRef.orderBy('time', 'desc').onSnapshot((doc) => {
      const newTodos = [];
      doc.docs.forEach((d) => {
        newTodos.push({
          id: d.id,
          title: d.data().title,
        });
      });
      this.todos = newTodos;
    }, (error) => {
      // エラー処理
    });
  },
  computed: {
    ...mapGetters(['getUserInfo']),
  },
  methods: {
    addItem(newItem) {
      if (newItem === '') { return; }
      Firebase.addTodoItem(this.user.uid, newItem);
    },
    deleteItem(todoId) {
      Firebase.deleteTodoItem(this.user.uid, todoId);
    },
  },
  components: {
    AddToDoItemBar,
    ToDoList,
  },
};
</script>
