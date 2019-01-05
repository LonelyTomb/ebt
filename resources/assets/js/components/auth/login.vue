<template>
<div class="uk-container login-container">
    <article class="uk-article">
        <!-- <h2 class="">Admin Login</h2> -->
        <section class="uk-section uk-section-default">
<div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto uk-box-shadow-large">
<div class="uk-card-header uk-card-secondary">
    <h3 class="uk-heading">Login</h3>
</div>
<div class="uk-card-body">
<form action="" class="uk-form uk-form-horizontal" id="login-form" ref="details">
<div>
    <label for="email" class="uk-form-label">Email</label>
    <div class="uk-form-controls">
    <input type="email" name="email" id="email" class="uk-input" v-model="details.email">
    </div>
</div>
<hr class="uk-divider-icon">
<div>
    <label for="password" class="uk-form-label">Password</label>
    <div class="uk-form-controls">
    <input type="password" name="password" id="password" class="uk-input" v-model="details.password">
    </div>
</div>
</form>
</div>
<div class="uk-card-footer">
<button class="uk-button uk-button-primary" form="login-form" @click.prevent="submit(details)">Login</button>
</div>
</div>
        </section>
    </article>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "admin-login",
  data() {
    return {
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
      console.log(form);
      window.axios
        .post("/login", form)
        .then(() => {
          window.location.reload();
        })
        .catch(val => {
          window.UIkit.notification("Incorrect Login Details","danger");
        });
    }
  }
};
</script>
