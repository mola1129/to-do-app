import Vue from 'vue';
import VueRouter from 'vue-router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import ToDo from '@/views/ToDo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'todo',
    component: ToDo,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

let onAuthStateChangedUnsubscribe: any;
// 未認証の場合はログイン画面へ
router.beforeEach((to, from, next) => {
  // 認証が必要なページがチェック
  if (typeof onAuthStateChangedUnsubscribe === 'function') {
    onAuthStateChangedUnsubscribe();
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    onAuthStateChangedUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        next({ path: '/signin' });
      }
    });
  } else {
    next(); // next() を常に呼び出すようにしてください!
  }
});

export default router;
