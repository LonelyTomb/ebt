<template>
  <v-app>
    <sidebar></sidebar>
  </v-app>
</template>

<script>
import sidebar from "./sidebar";
export default {
  name: "Header",
  components: {
    sidebar: sidebar
  }
};
</script>

<style>
</style>
