<template>
    <section class="uk-container uk-section">
        <data-table :titles="titles" :searchAttrs="searchAttrs" :itemList="usersList" :checkbox-filter="true" @selected-change="handleSelected"></data-table>
        <div class="uk-tile tk-tile-secondary uk-tile-xsmall">
             <button class="uk-button uk-button-primary" v-if="selectedItems.length === 1">Update User Data</button>
            <button class="uk-button uk-button-secondary" v-else-if="selectedItems.length > 1">Register Courses</button>

        </div>
    </section>
</template>

<script>
import dataTable from "./../../dataTable";

const titles = [
  {
    prop: "username",
    name: "Username"
  },
  {
    prop: "surname",
    name: "Surname"
  },
  {
    prop: "firstname",
    name: "Firstname"
  },
  {
    prop: "othernames",
    name: "Othernames"
  },
  {
    prop: "email",
    name: "Email"
  },
  {
    prop: "gender",
    name: "Gender"
  },
  {
    prop: "status",
    name: "Status"
  }
];
export default {
  name: "UserControls",
  components: {
    "data-table": dataTable
  },
  props: {
    usersList: Array
  },
  data() {
    return {
      searchAttrs: ["surname", "firstname", "othernames", "username"],
      selectedItems: [],
      titles
    };
  },
  mounted() {},
  methods: {
    handleSelected(select) {
      this.selectedItems = select;
      return select;
    }
  }
};
</script>

<style>
</style>
