<template>
  <v-container align-center>
    <v-layout>
      <v-flex xs11 md8>
        <v-card class="mx-auto">
          <v-toolbar :card="true">
            <v-toolbar-title>Add New User</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form id="register-form" ref="user" enctype="multipart/form-data" name="myForm">
              <v-container>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Enter Username</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Username"
                      placeholder="Username"
                      solo
                      v-model="user.username"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Enter Surname</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field label="Surname" placeholder="Surname" solo v-model="user.surname"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Enter Firstname</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Firstname"
                      placeholder="Firstname"
                      solo
                      v-model="user.firstname"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Enter Othernames</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Othernames"
                      placeholder="Othernames"
                      solo
                      v-model="user.othernames"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Enter Email</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field label="Email" placeholder="Email" solo v-model="user.email"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Select Gender</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-radio-group v-model="user.gender" row>
                      <v-radio
                        v-for="gender in genders"
                        :key="gender"
                        :label="gender"
                        :value="gender"
                      ></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Register Courses</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-select
                      solo
                      :items="courses"
                      label="Register Courses"
                      item-text="title"
                      item-value="id"
                      multiple
                      v-model="user.courses"
                    >
                      <v-list-tile slot="prepend-item" ripple @click="toggle">
                        <v-list-tile-action>
                          <v-icon
                            :color="user.courses.length > 0 ? 'indigo darken-4' : ''"
                          >{{ icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>Select All</v-list-tile-title>
                      </v-list-tile>
                    </v-select>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex sm4>
                    <v-subheader>Password</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      solo
                      v-model="user.password"
                      label="Password"
                      hint="At least six characters"
                      :append-icon="show ? 'visibility_off' : 'visibility'"
                      :type="show ? 'text':'password'"
                      counter
                      @click:append="show = !show"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex sm4>
                    <v-subheader>Confirm Password</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      solo
                      v-model="user.password_confirmation"
                      label="Confirm Password"
                      hint="At least six characters"
                      :append-icon="show_pwd ? 'visibility_off' : 'visibility'"
                      :type="show_pwd ? 'text':'password'"
                      counter
                      @click:append="show_pwd = !show_pwd"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex sm4>
                    <v-subheader>Upload Picture</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-switch
                      label="Upload Picture"
                      v-model="uploadPicture"
                      @change="toggleUpload()"
                    ></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout v-if="uploadPicture == true">
                  <v-flex>
                    <uploadWidget formid="user" @uploads="handleUpload"></uploadWidget>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-container>
              <v-layout class="text-xs-center">
                <v-flex>
                  <v-btn color="info" @click="submit(user)" block>Submit</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-actions>
          <transition name="loading">
            <v-progress-linear :indeterminate="true" v-if="loading === true"></v-progress-linear>
          </transition>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar :top="true" color="success" v-model="snackbar">Success</v-snackbar>
  </v-container>
</template>

<script>
import uploadWidget from "./../uploadWidget";
let genders = ["male", "female", "others"];

export default {
  name: "Register",
  components: {
    uploadWidget
  },
  props: {
    courses: Array
  },
  data() {
    return {
      genders,
      valid: true,
      show: false,
      show_pwd: false,
      uploadPicture: false,
      loading: false,
      snackbar: false,
      errors: {},
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
  computed: {
    allCourses() {
      return this.user.courses.length === this.courses.length;
    },
    someCourses() {
      return this.user.courses.length > 0 && !this.allCourses;
    },
    icon() {
      if (this.allCourses) return "remove";
      if (this.someCourses) return "add";
      return "select_all";
    }
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.allCourses) {
          this.user.courses = [];
        } else {
          this.user.courses = this.courses.slice();
        }
      });
    },
    toggleUpload() {
      if (this.uploadPicture == false) {
        this.user.picture = [];
      }
    },
    handleUpload(files) {
      this.user.picture = files;
    },
    submit(form) {
      this.loading = true;
      let formData = new FormData();
      /*
       *Add the form data we need to submit
       */
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      window.axios
        .post("/epanel/register/user", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status === "success") {
            this.loading = false;
            this.errors = {};
            this.snackbar = true;
            // window.location.reload;
          }
        })
        .catch(val => {
          this.loading = false;
          this.errors = val.response.data.errors;
        });
    }
  }
};
</script>
