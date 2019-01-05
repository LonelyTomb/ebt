<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="text-md-center" align-center justify-center>EBT</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-4">
              <v-toolbar dark color="primary">
                <v-toolbar-title class>Login Form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-alert
                  :value="true"
                  type="error"
                  v-if="errors.password || errors.email"
                  dismissible
                  transition="scale-transition"
                >
                  <span v-if="errors.email">{{errors.email[0]}}</span>
                  <span v-if="errors.password">{{errors.password[0]}}</span>
                </v-alert>
                <v-form id="admin-login-form" ref="details">
                  <v-text-field
                    prepend-icon="email"
                    name="email"
                    label="Email"
                    type="email"
                    v-model="details.email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="details.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  form="admin-login-form"
                  @click.prevent="submit(details)"
                >Login</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
              <transition name="loading">
                <v-progress-linear :indeterminate="true" v-if="loading === true"></v-progress-linear>
              </transition>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import footer from "./../layouts/footer";
export default {
  name: "Admin-Login",
  components: {
    "footer-component": footer
  },
  data() {
    return {
      loading: false,
      errors: {},
      details: {
        email: "",
        password: ""
      }
    };
  },
  mounted() {},
  methods: {
    submit(form) {
      this.loading = true;
      window.axios
        .post("/epanel/login", form)
        .then(() => {
          this.loading = false;
          window.location.reload();
        })
        .catch(val => {
          this.loading = false;
          this.errors = val.response.data.errors;
        });
    }
  }
};
</script>
