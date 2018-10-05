<template>
    <section class="uk-container uk-section">
        <div class="uk-card uk-card-default">

            <div class="uk-card-header">
            </div>
            <div class="uk-card-body">
                <div class="uk-overflow-auto">
                    <table class="uk-table uk-table-hover uk-table-striped uk-table-responsive">
                        <thead>
                            <th></th>
                            <th>No.</th>
                            <th v-for="(param,key) in users[0][0]" v-if="key != 'id'"> {{key.replace(/_/,' ')}}</th>
                        </thead>
                        <tbody>
                            <tr v-for="(user,index) in chunkedResult()" :key="user.id">
                                <td>
                                    <input type="checkbox" name="" id="" class="uk-checkbox" :value="user.id">
                                </td>
                                <td>
                                    {{index+1}}
                                </td>
                                <td v-for="(param) in Object.keys(users[0][0])" v-if="param != 'id'"> {{user[param]}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="uk-card-footer">
                <ul class="uk-pagination">
                    <li v-if="index !== 0">
                        <a class="uk-button uk-button-link" @click.prevent="index-=1"><span class="uk-margin-small-right"
                                uk-pagination-previous></span> Previous</a>
                    </li>
                    <li class="uk-margin-auto-left" v-if="index < users.length-1">
                        <a @click.prevent="++index" class="uk-button uk-button-link">Next <span class="uk-margin-small-left"
                                uk-pagination-next></span></a>
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<script>
export default {
  name: "UserControls",
  props: {
    users: Array
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    chunkedResult() {
      return this.users[this.index];
    }
  }
};
</script>

<style>
</style>
