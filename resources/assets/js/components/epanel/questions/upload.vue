<template>
<div class="courses-container">
    <article class="uk-article">
        <!-- <h2 class="">Admin Login</h2> -->
        <section class="uk-section">
            <!-- Form View -->
            <div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto" v-if="processedList.length == 0">
                <div class="uk-card-header">
                    <h3 class="uk-heading">Upload Question</h3>
                </div>
                <div class="uk-card-body">
                    <form class="uk-form uk-form-horizontal" id="upload-question-form" ref="uploadQuestions">
                        <div>
                            click to upload
                            <label for="course" class="uk-form-label">Course</label>
                            <div class="uk-form-controls">

                                <select name="course" id="course" v-model="questions.course" class="uk-select">
                                    <option v-for="course in courses" :key="course.index" :value="course.id" :name="course">{{course.title}}</option>
                                </select>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <div class="js-upload uk-placeholder uk-text-center">
                                <div v-if="this.questions.list.length == 0">
                                <span uk-icon="icon: cloud-upload"></span>
                                <span class="uk-text-middle">Drop File or</span>
                                <div uk-form-custom>
                                    <input type="file" name="list" id="list" class="uk-input" ref="list" @change="fileChange()">
                                    <span class="uk-link">click here to upload</span>
                                </div>
                                </div>
                                <div v-else class="file-selected uk-tile uk-tile-primary uk-padding-small">
                                <span>{{this.questions.list.name}}</span>
                                <button class="uk-close-large" type="button" uk-close @click="resetInput()"></button>
                            </div>
                            </div>

                            <progress id="js-progressbar" class="uk-progress" value="0" max="100" hidden></progress>
                        </div>
                    </form>
                </div>
                <div class="uk-card-footer">
                    <button class="uk-button uk-button-primary" form="upload-question-form" @click.prevent="upload(questions)">Preview</button>
                </div>
            </div>
            <!-- Upload Questions Preview -->
            <upload-preview :questions="processedList" v-else></upload-preview>
        </section>
    </article>
</div>
</template>

<script>
import uploadPreview from "./uploadPreview.vue";

export default {
  name: "UploadQuestion",
  components: {
    "upload-preview": uploadPreview
  },
  props: {
    courses: Array
  },
  data() {
    return {
      questions: {
        course: 1,
        list: []
      },
      processedList: []
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  methods: {
    resetInput() {
      this.questions.list = [];
    },
    fileChange() {
      this.questions.list = this.$refs.list.files[0];
      console.log(this.questions.list);
    },
    upload(form) {
      var bar = document.getElementById("js-progressbar");
      let formData = new FormData();
      /*
          *Add the form data we need to submit
      */
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      window.axios
        .post("/epanel/questions/parse", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          this.processedList = res.data;
        })
        .catch(error => {
          window.UIkit.notification("Unable to complete! Please try again");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.uk-form-custom:hover {
  cursor: pointer !important;
}
.uk-close-large {
  position: absolute;
  right: 4%;
}
</style>
