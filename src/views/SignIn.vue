<template>
    <v-container
      class="fill-height"
      fluid
    >
      <!-- style is for Vuetify's bug (https://github.com/vuetifyjs/vuetify/issues/9773) -->
      <v-row
        align="center"
        justify="center"
        style="max-width: initial"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
          lg="4"
        >
          <SignInCard />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Firebase from '@/firebase';
import SignInCard from '@/components/organisms/SignInCard.vue';

export default {
  name: 'SignIn',
  components: {
    SignInCard,
  },
};

</script>
