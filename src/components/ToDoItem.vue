<template>
    <v-card class="mt-3" height="90px">
      <v-card-title class="align-center">
          <v-col cols="10" sm="11">
            {{ title }}
          </v-col>
          <v-col cols="2" sm="1">
            <v-icon
              color="red lighten-2"
              @click="deleteItem()"
            >
              far fa-times-circle
            </v-icon>
          </v-col>
      </v-card-title>
    </v-card>
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
