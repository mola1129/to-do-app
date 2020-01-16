<template>
    <v-card class="mt-3" height="90px">
      <v-card-title class="align-center">
          <v-col cols="10" sm="11">
            {{ title }}
          </v-col>
          <v-col cols="2" sm="1">
            <DeleteButton @clickDeleteButton="onClickDeleteButton"/>
          </v-col>
      </v-card-title>
    </v-card>
</template>

<script>
import DeleteButton from '@/components/atoms/DeleteButton.vue';

export default {
  name: 'ToDoItem',
  components: {
    DeleteButton,
  },
  props: {
    title: String,
  },
  methods: {
    onClickDeleteButton() {
      this.$emit('clickDeleteButton');
    },
  },
};
</script>

<style scoped>

</style>
