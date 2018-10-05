<template>
    <section class="uk-container uk-section">
        <div class="uk-card uk-card-default">
            <div class="uk-card-header">
                <div class="uk-search uk-search-default">
                <input type="search" class="uk-search-input uk-search-toggle" placeholder="Search" v-model="searchTerm" @keyup="filterUsers()">
                </div>
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
                                    <input type="checkbox" name="" id="" class="uk-checkbox" :value="user.id" v-model="selectedUsers">
                                </td>
                                <td>
                                    {{Number(index)+1}}
                                </td>
                                <td v-for="(param) in Object.keys(users[0][0])" v-if="param != 'id'"> {{user[param]}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="uk-card-footer">
                <ul class="uk-pagination">
                    <li v-if="num !== 0">
                        <a class="uk-button uk-button-link" @click.prevent="num-=1"><span class="uk-margin-small-right"
                                uk-pagination-previous></span> Previous</a>
                    </li>
                    <li class="uk-margin-auto-left" v-if="num < users.length-1">
                        <a @click.prevent="++num" class="uk-button uk-button-link">Next <span class="uk-margin-small-left"
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
    usersList: Array
  },
  data() {
    return {
      num: 0,
      users: this.usersList,
      selectedUsers: [],
      searchTerm: "",
      searchAttrs: ["surname", "firstname","othernames", "username"]
    };
  },
  mounted() {},
  methods: {
    chunkedResult() {
      return this.users[this.num];
    },
    filterUsers() {
      this.searchTerm = this.searchTerm.toLowerCase();
      //If search is empty return unmodified array
      if (this.searchTerm == "") {
        this.users = this.usersList;
        return;
      }
      //Return filtered array
      this.users = this.usersList.map(userChunk =>
        Object.values(userChunk).filter(user =>
          this.searchAttrs.some(search =>
            user[search].toLowerCase().includes(this.searchTerm) || user.gender === this.searchTerm
          )
        )
      );
    }
  }
};
</script>

<style>
</style>
