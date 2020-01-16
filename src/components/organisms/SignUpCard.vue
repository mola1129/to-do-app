<template>
  <div class="sign-up-card">
    <v-card class="elevation-1 pa-3">
      <v-card-text>
        <div class="layout column align-center">
          <v-icon
            color="primary"
            x-large
          >
            fas fa-user-plus
          </v-icon>
          <h1 class="ma-5">
            Sign Up
          </h1>
        </div>
        <v-alert
          type="error"
          v-if="isUsedEmail"
        >
          The email address is already in use.
        </v-alert>
        <v-form v-model="valid">
          <v-text-field
            label="Email"
            type="text"
            :rules="emailRules"
            v-model="email"
          />
          <v-text-field
            label="Password"
            type="password"
            :counter="10"
            :rules="passwordRules"
            v-model="password"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          class="white--text"
          color="green"
          @click="signUp"
          :loading="isLoading"
          :disabled="!valid"
        >
          Sign up
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import * as firebase from 'firebase';

export default {
  name: 'SignUpCard',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      valid: true,
      isUsedEmail: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters',
      ],
    };
  },
  methods: {
    signUp() {
      this.isLoading = true;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.push('/todo');
        },
      ).catch(
        (e) => {
          this.isUsedEmail = true;
          this.isLoading = false;
        },
      );
    },
  },
};
</script>

<style scoped>

</style>
