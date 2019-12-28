import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
