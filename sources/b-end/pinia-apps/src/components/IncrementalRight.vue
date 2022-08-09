<script>
// import mapState dari pinia
import { mapState } from "pinia";
// import store yang digunakan
import { customStore } from "../stores/custom";

export default {
  name: "IncrementalRight",
  // state dari pinia akan kita letakkan pada "computed"
  // yang ada di component
  computed: {
    // gunakan spread agar bisa dikombinasikan dengan computed
    // pada local component ini.

    // mapState menerima 2 parameter:
    // parameter 1 adalah store yang digunakan
    // parameter 2 adalah array of string dari state yang ingin
    //    igunakan dari store
    ...mapState(customStore, ["initialNumber"]),
  },
};
</script>

<template>
  <div>
    <p class="font-semibold">
      <!-- di sini kita akan menggunakan computed-nya -->
      {{ initialNumber }}
    </p>
  </div>
</template>

<style scoped></style>
