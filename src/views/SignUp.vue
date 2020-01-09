<template>
  <v-container class="fill-height" fluid>
    <!-- style is for Vuetify's bug (https://github.com/vuetifyjs/vuetify/issues/9773) -->
    <v-row align="center" justify="center" style="max-width: initial">
      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12">
          <v-card-text>
            <v-alert
              type="error"
              v-if="isUsedEmail"
            >
              The email address is already in use.
            </v-alert>
            <v-form
              v-model="valid"
            >
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
              color="red"
              @click="signUp"
              :loading="isLoading"
              :disabled="!valid"
            >
              Register
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
