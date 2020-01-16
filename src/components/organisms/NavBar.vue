<template>
  <v-app-bar
    app
    color="primary"
    dark
    elevation="1"
  >
    <div class="d-flex align-center">
      <GitHubButton />
    </div>
    <v-spacer/>
    <auth-button/>
  </v-app-bar>
</template>

<script>
import AuthButton from '@/components/AuthButton.vue';
import GitHubButton from '@/components/atoms/GitHubButton.vue';

export default {
  name: 'NavBar',
  components: { AuthButton, GitHubButton },
};
</script>
