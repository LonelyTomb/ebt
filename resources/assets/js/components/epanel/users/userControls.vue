<template>
    <section class="uk-container uk-section">
<data-table :titles="titles" :searchAttrs="searchAttrs" :itemList="usersList" v-on:selected-items="selectedItems"></data-table>
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
      titles
    };
  },
  mounted() {},
  methods: {
      selectedItems(select){
          console.log(select);
      }
  }
};
</script>

<style>
</style>
