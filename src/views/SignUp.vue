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
            <v-btn color="red" @click="signUp" :loading="isLoading" dark>Register</v-btn>
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
    };
  },
  methods: {
    signUp() {
      this.isLoading = true;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log('Success !!');
          this.$router.push('/todo');
        },
      ).catch(
        (e) => {
          this.isLoading = false;
          console.error('既に登録済みのメールアドレスです');
        },
      );
    },
  },
};
</script>
