<template>
  <div class="delete-button"
       @click="onClickDeleteButton"
  >
    <v-icon color="red lighten-2">
      far fa-times-circle
    </v-icon>
  </div>
</template>

<script>
export default {
  methods: {
    onClickDeleteButton() {
      this.$emit('clickDeleteButton');
    },
  },
};
</script>
