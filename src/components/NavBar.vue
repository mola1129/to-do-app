<template>
  <v-app-bar
    app
    color="primary"
    dark
    elevation="1"
  >
    <div class="d-flex align-center">
      <v-btn
        icon
        large
        href="https://github.com/mola1129/to-do-app"
        target="_blank"
      >
        <v-icon>fab fa-github</v-icon>
      </v-btn>
    </div>
    <v-spacer/>
    <auth-button/>
  </v-app-bar>
</template>

<script>
import AuthButton from '@/components/AuthButton.vue';

export default {
  name: 'NavBar',
  components: { AuthButton },
};
</script>
