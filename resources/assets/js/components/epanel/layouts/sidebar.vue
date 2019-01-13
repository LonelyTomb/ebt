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
          :href="$routes.route(subLink.link)"
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
              title: "Upload Users List",
              link: "epanel.register.users"
            },
            {
              title: "Upload Questions List",
              link: "epanel.questions.upload"
            },
            {
              title: "Add New Course",
              link: "epanel.courses.create"
            },
            {
              title: "Input Question",
              link: "epanel.questions.create"
            }
          ]
        },
        {
          title: "Data Management",
          subLinks: [
            {
              title: "User Controls",
              link: "epanel.users.index"
            }
          ]
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style>
</style>
