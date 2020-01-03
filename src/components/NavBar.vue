<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Mola1129 Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/mola.png')"
          transition="scale-transition"
          width="40"
        />
      </router-link>
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
