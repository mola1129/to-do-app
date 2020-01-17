<template>
  <v-app-bar
    app
    color="primary"
    dark
    elevation="1"
  >
    <div class="d-flex align-center">
      <GitHubButton :href="url"/>
    </div>
    <v-spacer/>
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
  </v-app-bar>
</template>

<script>
import GitHubButton from '@/components/atoms/GitHubButton.vue';
import Firebase from '@/firebase';

export default {
  name: 'NavBar',
  components: { GitHubButton },
  data() {
    return {
      url: 'https://github.com/mola1129/to-do-app',
    };
  },
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
