<template>
  <div class="github-button">
    <v-btn
      icon
      large
      :href="href"
      target="_blank"
    >
      <v-icon>fab fa-github</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'GitHubButton',
  props: {
    href: String,
  },
};
</script>
