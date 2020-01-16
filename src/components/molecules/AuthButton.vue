<template>
  <div class="auth-button">
    <!-- ログイン時にはフォームとログアウトボタンを表示 -->
    <template v-if="!userStatus">
      <v-btn
        text
        to="/signin"
      >
        <span>Sign In</span>
      </v-btn>
      <v-btn
        text
        to="/signup"
      >
        <span>Sign Up</span>
      </v-btn>
    </template>
    <template v-else>
      <v-btn
        text
        @click="doLogout"
      >
        <span>Log Out</span>
      </v-btn>
    </template>
  </div>
</template>

<script>
import Firebase from '@/firebase';

export default {
  name: 'AuthButton',
  computed: {
    userStatus() {
      return this.$store.getters.isSignedIn;
    },
  },
  methods: {
    doLogout() {
      Firebase.logout();
    },
  },
};
</script>
