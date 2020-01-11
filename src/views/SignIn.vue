<template>
    <v-container class="fill-height" fluid>
      <!-- style is for Vuetify's bug (https://github.com/vuetifyjs/vuetify/issues/9773) -->
      <v-row align="center" justify="center" style="max-width: initial">
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card class="elevation-1 pa-3">
            <v-card-text>
              <div class="layout column align-center">
                <v-img src="@/assets/mola.png" height="120px" width="120px"/>
                <h1 class="ma-4">To Do App</h1>
              </div>
              <v-alert
                type="error"
                v-if="!isExist"
              >
                The email or password is incorrect.
              </v-alert>
              <v-form
                v-model="valid"
              >
                <v-text-field
                  label="Email"
                  type="text"
                  :rules="emailRules"
                  v-model="email"/>
                <v-text-field
                  label="Password"
                  type="password"
                  :rules="passwordRules"
                  v-model="password"/>
              </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn icon>
                  <v-icon color="red">fab fa-google</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fab fa-twitter</v-icon>
                </v-btn>
                <v-spacer />
                <v-btn
                  class="white--text"
                  color="green"
                  @click="signIn"
                  :loading="isLoading"
                  :disabled="!valid"
                >
                  Sign In
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Firebase from '@/firebase';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      isExist: true,
      valid: true,
      emailRules: [
        v => !!v || '',
      ],
      passwordRules: [
        v => !!v || '',
      ],
    };
  },
  methods: {
    signIn() {
      this.isLoading = true;
      Firebase.loginWithEmail(this.email, this.password).then(() => {
        setTimeout(() => {
          this.$router.push('/todo');
        }, 800);
      }).catch((e) => {
        this.isExist = false;
        this.isLoading = false;
      });
    },
  },
};

</script>
