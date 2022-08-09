<script>
import TableContent from "./TableContent.vue";
export default {
  components: { TableContent },
  name: "TableList",
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
    <table-content></table-content>
  </table>
</template>

<style scoped></style>
