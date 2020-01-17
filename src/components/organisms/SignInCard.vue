<template>
  <div class="sign-in-card">
    <v-card class="elevation-1 pa-3">
      <v-card-text>
        <div class="layout column align-center">
          <v-img
            src="@/assets/mola.png"
            height="120px"
            width="120px"
          />
          <h1 class="ma-4">
            To Do App
          </h1>
        </div>
        <v-alert
          type="error"
          v-if="!isExistUser"
        >
          The email or password is incorrect.
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
            :rules="passwordRules"
            v-model="password"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          icon
          @click="signInWithGoogle"
        >
          <v-icon color="red">
            fab fa-google
          </v-icon>
        </v-btn>
        <v-spacer/>
        <v-btn
          class="white--text"
          color="green"
          @click="signInWithEmail"
          :loading="isLoading"
          :disabled="!valid"
        >
          Sign In
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Firebase from '@/firebase';

export default {
  name: 'SignInCard',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      isExistUser: true,
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
    signInWithEmail() {
      this.isLoading = true;
      Firebase.signInWithEmail(this.email, this.password).then(() => {
        setTimeout(() => {
          this.$router.push('/todo');
        }, 800);
      }).catch((e) => {
        this.isExistUser = false;
        this.isLoading = false;
      });
    },
    signInWithGoogle() {
      Firebase.signInWithGoogle().then(() => {
        this.$router.push('/todo');
      });
    },
  },
};
</script>

<style scoped>

</style>
