<template>
  <v-app>
    <header-component></header-component>
    <v-toolbar color="red" dense fixed clipped-left app>
      <v-toolbar-side-icon @click="$store.commit('toggleDrawer')"></v-toolbar-side-icon>
      <v-icon class="mx-3">fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">EBT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-app>
</template>

<script>
import header from "./layouts/header";
export default {
  name: "home",
  components: {
    "header-component": header
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
