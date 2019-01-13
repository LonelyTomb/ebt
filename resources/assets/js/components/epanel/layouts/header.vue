<template>
  <header>
    <sidebar></sidebar>
    <v-toolbar dense color="primary" fixed clipped-left app>
      <v-toolbar-side-icon @click="$store.commit('toggleDrawer')"></v-toolbar-side-icon>
      <!-- <v-icon class="mx-3">home</v-icon> -->
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">EBT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </header>
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
