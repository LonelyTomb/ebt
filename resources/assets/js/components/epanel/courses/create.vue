<template>
<div class="courses-container">
    <article class="uk-article">
        <!-- <h2 class="">Admin Login</h2> -->
        <section class="uk-section">
<div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto">
<div class="uk-card-header">
    <h3 class="uk-heading">Add New Course</h3>
</div>
<div class="uk-card-body">
<form class="uk-form uk-form-horizontal" id="course-creation-form" ref="course">
<div>
    <label for="title" class="uk-form-label">Title</label>
    <div class="uk-form-controls">
    <input type="text" name="title" id="title" class="uk-input" v-model="course.title">
    </div>
</div>
<hr>
<div>
    <label for="code" class="uk-form-label">Code</label>
    <div class="uk-form-controls">
    <input type="text" name="code" id="code" class="uk-input" v-model="course.code">
    </div>
</div>
<hr>
<div>
    <label for="questions" class="uk-form-label">No of Questions</label>
    <div class="uk-form-controls">
    <input type="number" name="questions" id="questions" class="uk-input" v-model="course.questions">
    </div>
</div>
<hr>
<div>
    <label for="points" class="uk-form-label">Points Per Question</label>
    <div class="uk-form-controls">
    <input type="number" name="points" id="points" class="uk-input" v-model="course.points">
    </div>
</div>
<hr>
<div>
    <label for="duration" class="uk-form-label">Duration</label>
    <div class="uk-form-controls">
    <input type="number" name="duration" id="duration" class="uk-input" v-model="course.duration">
    </div>
</div>
</form>
</div>
<div class="uk-card-footer">
<button class="uk-button uk-button-primary" form="course-creation-form" @click.prevent="submit(course)">Create</button>
</div>
</div>
        </section>
    </article>
</div>
</template>

<script>
import axios from "axios";
import UIkit from "uikit";
export default {
  name: "Create-Course-Form",
  data() {
    return {
      course: {
        title: "",
        code: "",
        questions: 0,
        points:1,
        duration: 0
      }
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    submit(form) {
      axios
        .post("/epanel/courses", form)
        .then(val => val.json())
        .then(res => {
          if (res.status == "success") {
            console.log(res);
          }
        })
        .catch(error => {
          UIkit.notification("Unable to complete! Please try again");
        });
    }
  }
};
</script>
