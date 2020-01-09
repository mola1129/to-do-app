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
  loginWithEmail(email:string, password:string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  logout() {
    firebase.auth().signOut().then(
      (user) => {
      },
    ).catch(
      (e) => {
      },
    );
  },
  onAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      const currentUser = user || {
        uid: undefined,
      };
      store.commit('onAuthStateChanged', currentUser);
      store.commit('onUserStatusChanged', currentUser.uid);
    });
  },
  addTodoItem(userId:string, title:string) {
    const db = firebase.firestore();
    const todosRef = db.collection('users').doc(userId).collection('todos');
    const time = Date.now();
    todosRef.add({
      title, time,
    })
      .then((docRef) => {
      })
      .catch((error) => {
      });
  },
  deleteTodoItem(userId:string, todoId: string) {
    const db = firebase.firestore();
    const todosRef = db.collection('users').doc(userId).collection('todos').doc(todoId);
    todosRef.delete();
  },
};
