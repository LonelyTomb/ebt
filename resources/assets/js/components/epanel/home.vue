<template>
  <v-app>
    <!-- <header-component></header-component> -->
    <v-content>
      <v-container>
        <v-layout>
          <v-layout align-center justify-center>
            <v-flex></v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </v-content>
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
