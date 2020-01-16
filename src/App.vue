<template>
  <v-app>
      <nav-bar/>
      <v-content>
        <transition name="fade">
          <router-view/>
        </transition>
      </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/organisms/NavBar.vue';

export default Vue.extend({
  name: 'App',
  components: { NavBar },
  data: () => ({
  }),
});
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
