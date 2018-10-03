<template>
<div class="courses-container">
    <article class="uk-article">
        <!-- <h2 class="">Admin Login</h2> -->
        <section class="uk-section">
            <div class="uk-card uk-card-default uk-width-1-2@m uk-margin-auto uk-box-shadow-large">
                <div class="uk-card-header uk-card-primary">
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
                                <input type="number" name="questions" id="questions" class="uk-input" v-model="course.questions" min=0>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <label for="points" class="uk-form-label">Points Per Question</label>
                            <div class="uk-form-controls">
                                <input type="number" name="points" id="points" class="uk-input" v-model="course.points" min=0>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <label for="duration" class="uk-form-label">Duration</label>
                            <div class="uk-form-controls">
                                <input type="number" name="duration" id="duration" class="uk-input" v-model="course.duration" min=0>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <label for="always-available" class="uk-form-label">Always Available</label>
                            <div class="uk-form-controls">
                                <input type="checkbox" name="always-available" id="always-available" class="uk-checkbox"
                                    v-model="course.alwaysAvailable" value="1">
                            </div>
                        </div>
                        <hr>
                        <div v-if="course.alwaysAvailable == 0">
                            <label for="start-time" class="uk-form-label">Start Time</label>
                            <div class="uk-form-controls">
                                <input type="datetime-local" name="start-time" id="start-time" class="uk-input"
                                    v-model="course.startTime" value="1">
                            </div>
                        </div>
                        <hr>
                        <div v-if="course.alwaysAvailable == 0">
                            <label for="stop-time" class="uk-form-label">Stop Time</label>
                            <div class="uk-form-controls">
                                <input type="datetime-local" name="stop-time" id="stop-time" class="uk-input"
                                    v-model="course.stopTime" value="1">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="uk-card-footer uk-card-secondary">
                    <button class="uk-button uk-button-primary uk-box-shadow-hover-medium" form="course-creation-form" @click.prevent="submit(course)">Create</button>
                </div>
            </div>
        </section>
    </article>
</div>
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
