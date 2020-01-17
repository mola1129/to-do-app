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
    <template v-if="status">
      <v-btn
        text
        @click="$emit('clickSignOutButton')"
      >
        <span>Sign Out</span>
      </v-btn>
    </template>
    <template v-else>
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
  </v-app-bar>
</template>

<script>
import GitHubButton from '@/components/atoms/GitHubButton.vue';

export default {
  name: 'NavBar',
  components: { GitHubButton },
  props: {
    status: Boolean,
  },
  data() {
    return {
      url: 'https://github.com/mola1129/to-do-app',
    };
  },
};
</script>
