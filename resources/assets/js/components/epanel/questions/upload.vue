<template>
<div class="courses-container">
    <article class="uk-article">
        <!-- <h2 class="">Admin Login</h2> -->
        <section class="uk-section">
<div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto">
<div class="uk-card-header">
    <h3 class="uk-heading">Upload Question</h3>
</div>
<div class="uk-card-body">
<form class="uk-form uk-form-horizontal" id="upload-question-form" ref="uploadQuestions">
<div>
    <label for="course" class="uk-form-label">Course</label>
    <div class="uk-form-controls">

        <select name="course" id="course" v-model="questions.course" class="uk-select">
            <option v-for="course in courses" :key="course.index" :value="course.id" :name="course" >{{course.title}}</option>
        </select>
    </div>
</div>
<hr>
<div>
    <label for="file" class="uk-form-label">File</label>
    <div class="uk-form-controls">
    <input type="file" name="file" id="file" class="uk-input" ref="uploadFile" @change="fileChange()">
    </div>
</div>
</form>
</div>
<div class="uk-card-footer">
<button class="uk-button uk-button-primary" form="upload-question-form" @click.prevent="upload(question)">Create</button>
</div>
</div>
        </section>
    </article>
</div>
</template>

<script>

export default {
  name: "UploadQuestion",
  props: {
    courses: Array
  },
  data() {
    return {
      questions: {
        course: 1,
        file: ""
      }
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    fileChange() {
      this.questions.file = this.$refs.file.files[0];
    },
    upload(form) {
      let formData = new FormData();
      /*
        *Add the form data we need to submit
    */
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      window.axios
        .post("/epanel/question", form)
        .then(val => val.json())
        .then(res => {
          if (res.status == "success") {
            console.log(res);
          }
        })
        .catch(error => {
          window.UIkit.notification("Unable to complete! Please try again");
        });
    }
  }
};
</script>
