<template>
  <v-app>
      <NavBar :status="this.isSignedIn" @clickSignOutButton="signOut"/>
      <v-content>
        <transition name="fade">
          <router-view/>
        </transition>
      </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import NavBar from '@/components/organisms/NavBar.vue';
import Firebase from '@/firebase';

export default Vue.extend({
  name: 'App',
  components: { NavBar },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['isSignedIn']),
  },
  methods: {
    signOut() {
      Firebase.signOut();
    },
  },
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
