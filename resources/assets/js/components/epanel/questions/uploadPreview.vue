<template>
    <div class="uk-card uk-card-default uk-container uk-margin-auto">
        <div class="uk-card-header"></div>
        <div class="uk-card-body">
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-responsive uk-table-striped uk-table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th v-for="(param,key) in questions[0]"> {{key.replace(/_/,' ')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(question,key) in questions">
                            <td>{{key + 1}}</td>
                            <td>{{question.question}}</td>
                            <td>{{question.option_a}}</td>
                            <td>{{question.option_b}}</td>
                            <td>{{question.option_c}}</td>
                            <td>{{question.option_d}}</td>
                            <td>{{question.answer}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="uk-card-footer">
            <button class="uk-button uk-button-primary" @click="save()">Save</button>
            <slot></slot>

        </div>
        <div></div>
    </div>
</template>
<script>

export default {
  name: "Upload-Preview",
  props: {
    questions: Array,
    course: Number
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      window.UIkit.modal(document.querySelector(".uk-modal")).hide();
    },
    save() {
      window.UIkit.modal.alert("Saving to Database. Please Wait");
      window.axios
        .post("/epanel/questions/save", {
          course: this.course,
          questions: this.questions
        })
        .then(res => {
          this.closeModal();
          window.UIkit.notification(
            `${res.data.status}, ${res.data.count} questions saved`,
            "success"
          );
          window.location.replace('/epanel/');
        })
        .catch(err => {
          this.closeModal();
          window.UIkit.notification(
            "Unable to complete! Please try again",
            "danger"
          );
        });
    }
  }
};
</script>
