<template>
  <v-app>
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
      <div class="mr-2">
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
        <v-btn
          text
          to="/about"
        >
         <span>About</span>
        </v-btn>
        <v-btn
          text
          to="/todo"
        >
          <span>To Do</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
});
</script>
