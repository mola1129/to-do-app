import firebase from 'firebase';
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
        console.log(`${user} sign out.`);
      },
    ).catch(
      (e) => {
        console.error(e.message);
        console.error(e.code);
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
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  },
  deleteTodoItem(userId:string, todoId: string) {
    const db = firebase.firestore();
    const todosRef = db.collection('users').doc(userId).collection('todos').doc(todoId);
    todosRef.delete();
  },
};
