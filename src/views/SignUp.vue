<template>
  <v-container class="fill-height" fluid>
    <!-- style is for Vuetify's bug (https://github.com/vuetifyjs/vuetify/issues/9773) -->
    <v-row align="center" justify="center" style="max-width: initial">
      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12">
          <v-card-text>
            <v-form>
              <v-text-field label="Username" name="login" type="text"/>
              <v-text-field label="Password" name="password" type="password"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="red">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
