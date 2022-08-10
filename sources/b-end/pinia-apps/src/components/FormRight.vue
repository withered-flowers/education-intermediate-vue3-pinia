<script>
// import mapState
import { mapState } from "pinia";
// import store
import { customStore } from "../stores/custom";

export default {
  name: "FormRight",
  // state pada pinia = computed di component
  computed: {
    ...mapState(customStore, ["formData"]),
  },
};
</script>

<template>
  <div>
    <!-- di sini kita akan membaca formData.value1 -->
    <p class="font-semibold">{{ formData.value1 }}</p>
  </div>
</template>

<style scoped></style>
