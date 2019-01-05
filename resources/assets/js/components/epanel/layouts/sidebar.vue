<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    color="secondary"
    :clipped="$vuetify.breakpoint.mdAndUp"
    app
  >
    <v-list>
      <v-list-group v-for="link in links" :key="link.title" no-action>
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{link.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="subLink in link.subLinks"
          :key="subLink.title"
          v-html="route('{{subLink.link}}')"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{subLink.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      links: [
        {
          title: "Data Capture",
          subLinks: [
            {
              title: "Add New User",
              link: "epanel.register.user"
            },
            {
              title: "Upload users List",
              link: "epanel.register.users"
            }
          ]
        },
        {
          title: "Data Capture",
          subLinks: [
            {
              title: "Add New User",
              link: "epanel.register.user"
            },
            {
              title: "Upload users List",
              link: "epanel.register.users"
            }
          ]
        },
        {
          title: "Data Capture",
          subLinks: [
            {
              title: "Add New User",
              link: "epanel.register.user"
            },
            {
              title: "Upload users List",
              link: "epanel.register.users"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    console.log(this.$store.state.drawer);
  }
};
</script>

<style>
</style>
