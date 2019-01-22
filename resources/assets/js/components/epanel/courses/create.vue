<template>
  <v-container align-center>
    <v-layout>
      <v-flex xs11 md8>
        <v-card class="mx-auto">
          <v-toolbar :card="true">
            <v-toolbar-title>Add New Course</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form id="course-creation-form" ref="course" enctype="multipart/form-data" name="course-creation-form">
              <v-container>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Title</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Title"
                      placeholder="Title"
                      solo
                     name="title" id="title" v-model="course.title"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Code</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Code"
                      placeholder="Code"
                      solo
                     name="code" id="code" v-model="course.code"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>No of Questions</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="No of Questions"
                      placeholder="No of Questions"
                      solo
                     type="number" name="questions" id="questions" v-model="course.questions" min=0
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Points Per Question</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Points Per Question"
                      placeholder="Points Per Question"
                      solo
                     type="number" name="points" id="points" v-model="course.points" min=0
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Duration</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Duration"
                      placeholder="Duration"
                      solo
                     type="number" name="duration" id="duration" v-model="course.duration" min=0>
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Always Available</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-checkbox
                      label="Always Available"
                      placeholder="Always Available"
                      solo
                     t name="always-available" id="always-available"
                                    v-model="course.alwaysAvailable" value="1">
                    ></v-checkbox>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Start Time</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Start Time"
                      placeholder="Start Time"
                      solo
                      type="datetime-local" name="start-time" id="start-time"
                                    v-model="course.startTime" value="1">
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex sm4>
                    <v-subheader>Stop Time</v-subheader>
                  </v-flex>
                  <v-flex sm8>
                    <v-text-field
                      label="Stop Time"
                      placeholder="Stop Time"
                      solo
                     type="datetime-local" name="stop-time" id="stop-time"
                                    v-model="course.stopTime" value="1">
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-container>
              <v-layout class="text-xs-center">
                <v-flex>
                  <v-btn color="info" @click="submit(course)" block>Create</v-btn>
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

export default {
  name: "Create-Course-Form",
  data() {
    return {
      course: {
        title: "",
        code: "",
        questions: 0,
        points:1,
        duration: 0,
        alwaysAvailable:1,
        startTime:null,
        stopTime:null
      }
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    submit(form) {
      window.axios
        .post("/epanel/courses", form)
        .then(res => {
          if (res.data.status == "success") {
            window.UIkit.notification(`${res.data.status}`,"success");
          }
        })
        .catch(error => {
          window.UIkit.notification("Unable to complete! Please try again","danger");
        });
    }
  }
};
</script>
