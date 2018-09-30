<template>
    <div class="uk-card uk-card-default uk-container uk-margin-auto">
        <div class="uk-card-header"></div>
        <div class="uk-card-body">
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-responsive uk-table-striped uk-table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th v-for="(param,key) in users[0]"> {{key.replace(/_/,' ')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,key) in users">
                            <td>{{key + 1}}</td>
                            <td>{{user.surname}}</td>
                            <td>{{user.firstname}}</td>
                            <td>{{user.othernames}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.gender}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="uk-card-footer uk-card-secondary">
            <button class="uk-button uk-button-primary" @click="save()">Save</button>
            <slot></slot>

        </div>
        <div></div>
    </div>
</template>
<script>

export default {
  name: "Upload-Register-Preview",
  props: {
    users: Array
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
        .post("/epanel/users/save", {
          users: this.users
        })
        .then(res => {
          this.closeModal();
          window.UIkit.notification(
            `${res.data.status}, ${res.data.count} users saved`,
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
