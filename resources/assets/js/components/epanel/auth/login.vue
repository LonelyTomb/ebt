<template>
<div class="admin-login-container">
    <article class="uk-article">
        <!-- <h2 class="">Admin Login</h2> -->
        <section class="uk-section">
            <div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto">
                <div class="uk-card-header">
                    <h3 class="uk-heading">Admin Epanel Login</h3>
                </div>
                <div class="uk-card-body">
                    <form action="" class="uk-form uk-form-horizontal" id="admin-login-form" ref="details">
                        <div>
                            <label for="email" class="uk-form-label">Email</label>
                            <div class="uk-form-controls">
                                <input type="email" name="email" id="email" class="uk-input" v-model="details.email">
                                <small class="uk-text-warning" v-if="errors.email">{{errors.email[0]}}</small>
                            </div>
                        </div>
                        <hr class="uk-divider-icon">
                        <div>
                            <label for="password" class="uk-form-label">Password</label>
                            <div class="uk-form-controls">
                                <input type="password" name="password" id="password" class="uk-input" v-model="details.password">
                                <small class="uk-text-warning" v-if="errors.password">{{errors.password[0]}}</small>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="uk-card-footer">
                    <button class="uk-button uk-button-primary" form="admin-login-form" @click.prevent="submit(details)">Login</button>
                        <transition name="loading">
                            <p v-if="loading === true" class="uk-alert uk-alert-success uk-display-inline uk-animation-slide-bottom uk-animation-toggle">
                                Loading
                            </p>
                        </transition>
                </div>
            </div>
        </section>
    </article>
</div>
</template>

<script>
export default {
  name: "Admin-Login",
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
  mounted() {
    console.log("Component mounted.");
  },
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
          window.UIkit.notification("Unable to login!");
        });
    }
  }
};
</script>
