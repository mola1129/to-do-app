<template>
  <div class="add-to-do-item-bar">
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="7">
        <v-text-field
          v-model="newItem"
          placeholder="New To Do"
        />
      </v-col>
      <v-col cols="1">
        <v-btn @click="onClickAddButton">
          Add
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AddToDoItemBar',
  data() {
    return {
      newItem: '',
    };
  },
  methods: {
    onClickAddButton() {
      this.$emit('clickAddButton', this.newItem);
      this.newItem = '';
    },
  },
};
</script>

<style scoped>

</style>
