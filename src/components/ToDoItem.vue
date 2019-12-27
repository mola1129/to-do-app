<template>
  <v-container>
    <v-card height="70px">
      <v-card-title>{{ title }}</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['title'],
};
</script>

<style scoped>

</style>
