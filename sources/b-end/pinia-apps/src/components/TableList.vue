<script>
// import mapActions dan mapState
import { mapActions, mapState } from "pinia";
// import stores
import { customStore } from "../stores/custom";
import TableContent from "./TableContent.vue";
export default {
  components: { TableContent },
  name: "TableList",
  // declare actions pada methods
  methods: {
    ...mapActions(customStore, ["fetchJokes"]),
  },
  // declare state pada computed
  computed: {
    ...mapState(customStore, ["jokes"]),
  },
  // panggil methods pada created
  created() {
    this.fetchJokes();
  },
};
</script>

<template>
  <table class="table-fixed w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-100">
        <th class="w-1/6 border border-gray-300">ID</th>
        <th class="w-1/3 border border-gray-300">Setup</th>
        <th class="w-1/3 border border-gray-300">Punchline</th>
      </tr>
    </thead>
    <!-- karena sekarang kita butuh looping -->
    <!-- Maka kita akan menggunkan v-for dan anggap state jokes seperti -->
    <!-- computed pada umumnya  -->
    <table-content
      v-for="joke in jokes"
      v-bind:key="joke.id"
      v-bind:jokeYangDilempar="joke"
    ></table-content>
  </table>
</template>

<style scoped></style>
