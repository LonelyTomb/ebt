<template>
<div class="courses-container">
    <article class="uk-article">
        <!-- <h2 class="">Admin Login</h2> -->
        <section class="uk-section">
            <div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto uk-card-hover">
                <div class="uk-card-header uk-card-primary">
                    <h3 class="uk-heading">Upload Question</h3>
                </div>
                <div class="uk-card-body">
                    <form class="uk-form uk-form-horizontal" id="upload-question-form" ref="uploadQuestions">
                        <div>
                            <label for="course" class="uk-form-label">Course</label>
                            <div class="uk-form-controls">
                                <select name="course" id="course" v-model="question.course" class="uk-select">
                                    <option v-for="course in courses" :key="course.index" :value="course.id" :name="course">{{course.title}}</option>
                                </select>
                            </div>
                        </div>
                        <hr class="uk-divider">
                        <div>
                            <label class="uk-form-label" for="question">Question</label>
                            <div class="uk-form-controls-text">
                                <textarea name="question" id="question" cols="10" rows="5" v-model="question.text"
                                    class="uk-textarea" required></textarea>
                            </div>
                        </div>
                        <hr class="uk-divider">
                        <div>
                            <label class="uk-form-label" for="option-a">Option A</label>
                            <div class="uk-form-controls-text">
                                <textarea name="optionA" id="option-a" cols="10" rows="2" v-model="question.a" class="uk-textarea"></textarea>
                            </div>
                        </div>
                        <hr class="uk-divider">
                        <div>
                            <label class="uk-form-label" for="option-b">Option B</label>
                            <div class="uk-form-controls-text">
                                <textarea name="optionB" id="option-b" cols="10" rows="2" v-model="question.b" class="uk-textarea"></textarea>
                            </div>
                        </div>
                        <hr class="uk-divider">
                        <div>
                            <label class="uk-form-label" for="option-c">Option C</label>
                            <div class="uk-form-controls-text">
                                <textarea name="optionC" id="option-c" cols="10" rows="2" v-model="question.c" class="uk-textarea"></textarea>
                            </div>
                        </div>
                        <hr class="uk-divider">
                        <div>
                            <label for="option-d" class="uk-form-label">Option D</label>
                            <div class="uk-form-controls-text">
                                <textarea name="optionD" id="option-d" cols="10" rows="2" v-model="question.d" class="uk-textarea"></textarea>
                            </div>
                        </div>
                        <hr class="uk-divider">
                        <div>
                            <fieldset class="uk-fieldset">
                                <legend class="uk-legend">
                                    Correct Option
                                </legend>
                                <div class="uk-flex uk-flex-row uk-flex-wrap">
                                    <div class="uk-flex uk-flex-row uk-flex-wrap">
                                        <label for="correct-option-a">Option A</label>
                                        <div class="uk-form-controls">
                                            <input type="radio" class="uk-radio" id="correct-option-a" v-model="question.correct"
                                                name="correct" value="a">
                                        </div>
                                    </div>
                                    <div class="uk-flex uk-flex-row uk-flex-wrap">
                                        <label for="correct-option-b">Option B</label>
                                        <div class="uk-form-controls">
                                            <input type="radio" class="uk-radio" id="correct-option-b" v-model="question.correct"
                                                name="correct" value="b">
                                        </div>
                                    </div>
                                    <div class="uk-flex uk-flex-row uk-flex-wrap">
                                        <label for="correct-option-c">Option C</label>
                                        <div class="uk-form-controls">
                                            <input type="radio" class="uk-radio" id="correct-option-c" v-model="question.correct"
                                                name="correct" value="c">
                                        </div>
                                    </div>
                                    <div class="uk-flex uk-flex-row uk-flex-wrap">
                                        <label for="correct-option-d">Option D</label>
                                        <div class="uk-form-controls">
                                            <input type="radio" class="uk-radio" id="correct-option-d" v-model="question.correct"
                                                name="correct" value="d">
                                        </div>
                                    </div>

                                </div>
                            </fieldset>

                        </div>
                        <hr class="uk-divider">
                        <div>
                            <label for="upload" class="uk-form-label">Upload Picture</label>
                            <div class="uk-form-controls">
                                <input type="checkbox" :value="uploadPicture" class="uk-checkbox" id="upload" @click="toggleUpload()">
                            </div>
                            <div v-if="uploadPicture === true">
                                <div>
                                    <div class="js-upload uk-placeholder uk-text-center">
                                        <div v-if="this.question.picture.length == 0">
                                            <span uk-icon="icon: cloud-upload"></span>
                                            <span class="uk-text-middle">Drop File or</span>
                                            <div uk-form-custom>
                                                <input type="file" name="picture" id="picture" class="uk-input" ref="picture"
                                                    @change="pictureChange()">
                                                <span class="uk-link">click here to upload</span>
                                            </div>
                                        </div>
                                        <div v-else class="file-selected uk-tile uk-tile-primary uk-padding-small">
                                            <span>{{this.question.picture.name}}</span>
                                            <button class="uk-close-large" type="button" uk-close @click="resetPicture()"></button>
                                        </div>
                                    </div>

                                    <progress id="js-progressbar" class="uk-progress" value="0" max="100" hidden></progress>
                                </div>
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
      uploadPicture: false,
      question: {
        course: 1,
        text: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: "",
        picture: []
      }
    };
  },
  mounted() {},
  methods: {
    resetPicture() {
      this.question.picture = [];
    },
    toggleUpload() {
      this.uploadPicture = !this.uploadPicture;
      if (this.uploadPicture == false) {
        this.question.picture = [];
      }
    },
    pictureChange() {
      this.question.picture = this.$refs.picture.files[0];
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
        .post("/epanel/questions", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.status == "success") {
            UIkit.notification(`${res.data.message}`, "success");
          }
        })
        .catch(error => {
          console.log(error);
          UIkit.notification("Unable to complete! Please try again", "warning");
        });
    }
  }
};
</script>
