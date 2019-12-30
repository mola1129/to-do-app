<template>
  <v-container>
    <v-card height="90px">
      <v-row justify="space-around" align="center">
        <v-col cols="11">
          <v-card-title>{{ title }}</v-card-title>
        </v-col>
        <v-col cols="1">
          <v-icon color="red lighten-2" @click="deleteItem()">far fa-times-circle</v-icon>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['title'],
  methods: {
    deleteItem() {
      this.$emit('delete');
    },
  },
};
</script>

<style scoped>

</style>
