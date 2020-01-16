<template>
  <div class="github-button">
    <v-btn
      icon
      large
      :href="url"
      target="_blank"
    >
      <v-icon>fab fa-github</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://github.com/mola1129/to-do-app',
    };
  },
};
</script>
