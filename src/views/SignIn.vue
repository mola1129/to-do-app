<template>
    <v-container class="fill-height" fluid>
      <!-- style is for Vuetify's bug (https://github.com/vuetifyjs/vuetify/issues/9773) -->
      <v-row align="center" justify="center" style="max-width: initial">
        <v-col cols="12" sm="6" md="4">
          <v-card class="elevation-12">
            <v-card-text>
              <v-form>
                <v-text-field label="Email" type="text" v-model="email"/>
                <v-text-field label="Password" type="password" v-model="password"/>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="signIn">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        Console.log(errorCode);
        Console.log(errorMessage);
      });
    },
  },
};

</script>
