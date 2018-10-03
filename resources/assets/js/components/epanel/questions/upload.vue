<template>
<div class="courses-container">
    <article class="uk-article">
        <!-- <h2 class="">Admin Login</h2> -->
        <section class="uk-section">
            <!-- Form View -->
            <div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto" v-if="processedList.length == 0">
                <div class="uk-card-header uk-card-primary">
                    <h3 class="uk-heading">Upload Questions</h3>
                </div>
                <div class="uk-card-body">

                    <section class="uk-tile-muted uk-tile uk-tile-xsmall uk-padding-small">
                        <small class="uk-padding-remove uk-margin-small">
                            Document must be in excel format and must have the below format as the first row in the excel sheet
                        </small>

                        <table class="uk-table uk-table-responsive uk-table-small uk-background-secondary">
                            <thead>
                                <tr>
                                <th v-for="heading in format">{{heading}}</th>
                                </tr>
                            </thead>
                        </table>
</section>
                    <hr>

                    <form class="uk-form uk-form-horizontal" id="upload-question-form" ref="uploadQuestions">
                        <div>
                            <label for="course" class="uk-form-label">Course</label>
                            <div class="uk-form-controls">

                                <select name="course" id="course" v-model="questions.course" class="uk-select">
                                    <option v-for="course in courses" :key="course.index" :value="course.id" :name="course">{{course.title}}</option>
                                </select>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <div class="js-upload uk-placeholder uk-text-center" ref="dropZone">
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
                <div class="uk-card-footer uk-card-secondary">
                    <button class="uk-button uk-button-primary" form="upload-question-form" @click.prevent="upload(questions)" :disabled="disabled">Preview</button>
                </div>
            </div>
            <!-- Upload Questions Preview -->
            <upload-preview :questions="processedList" :course="questions.course" v-else>
                <button class="uk-button uk-button-danger" @click="cancel()">Cancel</button>
            </upload-preview>
        </section>
    </article>
</div>
</template>

<script>
import uploadPreview from "./uploadPreview.vue";
const format = [
  "question",
  "option_a",
  "option_b",
  "option_c",
  "option_d",
  "answer"
];
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
      format,
      processedList: [],
      disabled: true
    };
  },
  mounted() {
    console.log("Component mounted.");
    [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop"
    ].forEach(
      function(evt) {
        /*
        For each event add an event listener that prevents the default action
        (opening the file in the browser) and stop the propagation of the event (so
        no other elements open the file in the browser)
      */
        this.$refs.dropZone.addEventListener(
          evt,
          function(e) {
            e.preventDefault();
            e.stopPropagation();
          }.bind(this),
          false
        );
      }.bind(this)
    );
     this.$refs.dropZone.addEventListener('drop', function(e){
      /*
        Capture the files from the drop event and add them to our local files
        array.
      */
     this.questions.list = e.dataTransfer.files[0];
     this.toggleSave();
    }.bind(this));
  },
  methods: {
    toggleSave() {
      this.disabled = !this.disabled;
    },
    resetInput() {
      this.questions.list = [];
      this.toggleSave();
    },
    fileChange() {
      this.questions.list = this.$refs.list.files[0];
      this.toggleSave();
    },
    cancel() {
      this.processedList = [];
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
        .post("/epanel/files/parse", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          this.processedList = res.data.collection;
        })
        .catch(error => {
          window.UIkit.notification(
            "Unable to complete! Please try again",
            "danger"
          );
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
