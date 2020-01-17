import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import store from './store';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJjaf-BBMrniE4m6zWVQJiUJmYcmN8jIg',
  authDomain: 'to-do-app-d32ae.firebaseapp.com',
  databaseURL: 'https://to-do-app-d32ae.firebaseio.com',
  projectId: 'to-do-app-d32ae',
  storageBucket: 'to-do-app-d32ae.appspot.com',
  messagingSenderId: '778884966366',
  appId: '1:778884966366:web:66db148437bcaaa78b1f4f',
  measurementId: 'G-GZYBNBWG0Y',
};

export default {
  init() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  },
  signInWithEmail(email:string, password:string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
  },
  signOut() {
    return firebase.auth().signOut();
  },
  onAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      const currentUser = user;
      store.commit('onAuthStateChanged', currentUser);
      store.commit('onUserStatusChanged', !(currentUser == null));
    });
  },
  getCollectionReference(userId:string) {
    const db = firebase.firestore();
    return db.collection('users').doc(userId).collection('todos');
  },
  addTodoItem(userId:string, title:string) {
    const todosRef = this.getCollectionReference(userId);
    const time = Date.now();
    return todosRef.add({
      title, time,
    });
  },
  deleteTodoItem(userId:string, todoId: string) {
    const db = firebase.firestore();
    const todoItemRef = this.getCollectionReference(userId).doc(todoId);
    return todoItemRef.delete();
  },
};
