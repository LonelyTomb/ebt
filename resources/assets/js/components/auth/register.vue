<template>
<div class="register-container">
    <article class="uk-article uk-background-muted">
        <!-- <h2 class="">Register User</h2> -->
        <section class="uk-section">
<div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto">
<div class="uk-card-header">
    <h3 class="uk-heading">Add New User</h3>
</div>
<div class="uk-card-body">
<form action="" class="uk-form uk-form-horizontal" id="register-form" ref="user" enctype="multipart/form-data" name="myForm">
    <div>
    <label for="username" class="uk-form-label">Username: </label>
    <div class="uk-form-controls">
    <input type="text" name="username" id="username" class="uk-input" v-model="user.username">
    </div>
</div>
<hr class="uk-divider-small">
<div>
    <label for="surname" class="uk-form-label">Surname: </label>
    <div class="uk-form-controls">
    <input type="text" name="surname" id="surname" class="uk-input" v-model="user.surname" required>
    </div>
</div>
<hr class="uk-divider-small">
<div>
    <label for="firstname" class="uk-form-label">First Name: </label>
    <div class="uk-form-controls">
    <input type="text" name="firstname" id="firstname" class="uk-input" v-model="user.firstname" required>
    </div>
</div>
<hr class="uk-divider-small">
<div>
    <label for="othernames" class="uk-form-label">Other Names: </label>
    <div class="uk-form-controls">
    <input type="text" name="othernames" id="othernames" class="uk-input" v-model="user.othernames">
    </div>
</div>
<hr class="uk-divider-small">
<div>
    <label for="email" class="uk-form-label">Email: </label>
    <div class="uk-form-controls">
    <input type="email" name="email" id="email" class="uk-input" v-model="user.email" required>
    </div>
</div>
<hr class="uk-divider-small">
<div>
    <fieldset>
        <legend>Gender</legend>
        <div class="uk-flex uk-flex-column">
        <div v-for="gender in genders" :key="gender.index">
        <label :for="gender" class="uk-form-label uk-text-capitalize">{{gender}} </label>
            <div class="uk-form-controls">
            <input type="radio" name="gender" :id="gender" class="uk-radio" v-model="user.gender" :value="gender" required>
        </div>
        </div>
    </div>
    </fieldset>
</div>
<hr class="uk-divider-small">
<div>
    <fieldset>
        <legend>Courses</legend>
        <div class="uk-flex uk-flex-column">
        <div v-for="course in courses" :key="course.index">
        <label :for="course.title" class="uk-form-label uk-text-capitalize">{{course.title}} </label>
            <div class="uk-form-controls">
            <input type="checkbox" name="courses" :id="course.title" class="uk-checkbox" v-model="user.courses" :value="course.id">
        </div>
        </div>
    </div>
    </fieldset>
</div>
<hr class="uk-divider-small">
<div>
    <label for="password" class="uk-form-label">Password: </label>
    <div class="uk-form-controls">
    <input type="password" name="password" id="password" class="uk-input" v-model="user.password" required>
    </div>
</div>
<hr class="uk-divider-small">
<div>
    <label for="password_confirmation" class="uk-form-label">Confirm Password: </label>
    <div class="uk-form-controls">
    <input type="password" name="password_confirmation" id="password_confirmation" class="uk-input" v-model="user.password_confirmation" required>
    </div>
</div>
<hr class="uk-divider-small">
<div>
    <label for="upload" class="uk-form-label">Upload Picture</label>
    <div class="uk-form-controls">
    <input type="checkbox" :value="uploadPicture" class="uk-checkbox" id="upload" @click="uploadPicture = !uploadPicture">
    </div>
<div v-if="uploadPicture === true">
    <label for="Picture" class="uk-form-label">Picture: </label>
    <div class="uk-form-controls">
    <input type="file" name="picture" id="picture" class="" accept="image/*" @change="fileChange()" ref="picture">
    </div>
    </div>
</div>
<hr class="uk-divider-small">
</form>
</div>
<div class="uk-card-footer">
<button class="uk-button uk-button-primary" form="login-form" @click.prevent="submit(user)" type="submit">Register</button>
</div>
</div>
        </section>
    </article>
</div>
</template>

<script>
import axios from "axios";
import UIkit from "uikit";
let genders = ["male", "female", "others"];

export default {
  name: "Register",
  props: {
    courses: Array
  },
  data() {
    return {
      genders,
      uploadPicture: false,
      user: {
        username: "",
        surname: "",
        firstname: "",
        othernames: "",
        email: "",
        password: "",
        password_confirmation: "",
        gender: "",
        courses: [],
        password: "",
        picture: []
      }
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  computed: {},
  methods: {
    fileChange() {
      this.user.picture = this.$refs.picture.files[0];
    },
    submit(form) {
      let formData = new FormData();
      /*
        *Add the form data we need to submit
    */
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      axios
        .post("/epanel/register/user", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => res.json())
        .then(response => {
          if (response.status === "success") {
            UIkit.notification(response.message);
            window.location.reload;
          }
        })
        .catch(val => {
        //   if (response.status === "success") {
        //     UIkit.notification(response.message);
        //     window.location.reload;
        //   } else {
        //     UIkit.notification("Incorrect Login Details");
        //   }
        });
    }
  }
};
</script>
