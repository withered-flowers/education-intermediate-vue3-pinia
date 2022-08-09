<script>
// di sini kita akan import mapActions
import { mapActions } from "pinia";
// jangan lupa import store yang digunakan
import { customStore } from "../stores/custom";

export default {
  name: "IncrementalLeft",
  // actions akan kita letakkan pada.... methods !
  methods: {
    // gunakan spread seperti mapState
    ...mapActions(customStore, ["incrementInitialNumber"]),
    // kita coba juga membuat local methodsnya
    buttonOnClickHandler() {
      console.log("Tombol tertekan");
      // invoke actions
      this.incrementInitialNumber();
    },
  },
};
</script>

<template>
  <!-- Sambungkan event onclick dengan methods buttonOnClickHandler -->
  <button
    class="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-300 hover:shadow-md"
    v-on:click="buttonOnClickHandler"
  >
    Increment
  </button>
</template>

<style scoped></style>
