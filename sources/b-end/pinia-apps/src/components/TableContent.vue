<script>
export default {
  name: "TableContent",
  // menerima props
  props: ["jokeYangDilempar"],
};
</script>

<template>
  <tbody>
    <tr>
      <!-- Kita gunakan props punya data di sini -->
      <td class="border border-gray-300">{{ jokeYangDilempar.id }}</td>
      <td class="border border-gray-300">{{ jokeYangDilempar.setup }}</td>
      <td class="border border-gray-300">{{ jokeYangDilempar.delivery }}</td>
    </tr>
  </tbody>
</template>

<style scoped></style>
