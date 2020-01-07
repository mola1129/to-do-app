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
            <v-btn color="red" @click="signUp">
              <div v-if="!this.isWaiting">Register</div>
              <v-progress-circular v-else color="white" indeterminate>
              </v-progress-circular>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      isWaiting: false,
    };
  },
  methods: {
    signUp() {
      this.isWaiting = true;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log('Success !!');
          this.$router.push('/todo');
        },
      ).catch(
        (e) => {
          this.isWaiting = false;
          console.error('既に登録済みのメールアドレスです');
        },
      );
    },
  },
};
</script>
