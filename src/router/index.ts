import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import ToDo from '@/views/ToDo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
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
  {
    path: '/todo',
    name: 'todo',
    component: ToDo,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 未認証の場合はログイン画面へ
router.beforeEach((to, from, next) => {
  // 認証が必要なページがチェック
  if (to.matched.some(record => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('認証中');
        next();
      } else {
        console.log('未認証');
        next({ path: '/signin' });
      }
    });
  } else {
    next(); // next() を常に呼び出すようにしてください!
  }
});

export default router;
