<script>
// import mapActions
import { mapActions } from "pinia";
// import store
import { customStore } from "../stores/custom";

export default {
  name: "FormLeft",
  // karena di sini ada menggunakan form
  // maka sekarang kita juga membutuhkan local state
  data() {
    return {
      // sebut saja namanya adalah localFormData
      // karena kemungkinan ada banyak, kita bentuk dalam object
      localFormData: {
        input1: "",
      },
    };
  },

  // gunakan actions pada methods
  methods: {
    ...mapActions(customStore, ["formHandler"]),
    // tambahkan local methods untuk memproses form submission
    localFormHandler() {
      // di sinilah kita akan menggunakan actions
      // ingat formHandler menerima sebuah "payload" bukan?
      // bagaimana cara kita mengirimnya?

      // ya, lewat invoke dan kirim via args nya !
      // ingat payload menerima object primitif yah !
      this.formHandler({
        // ingat object nya menerima sebuah props dengan nama "value1" yah
        // lihat src/stores/custom.js pada state "formData" bila lupa
        value1: this.localFormData.input1,
      });
    },
  },
};
</script>

<template>
  <!-- binding event localFormHandler pada form submission event  -->
  <form action="#" v-on:submit.prevent="localFormHandler">
    <div>
      <!-- jangan lupa binding 2 arah input ini dengan local data (v-model) -->
      <input
        type="text"
        placeholder="Just write me"
        v-model="localFormData.input1"
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700"
      />
    </div>
    <div class="mt-4">
      <button
        type="submit"
        class="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-300 hover:shadow-md"
      >
        Transfer Me
      </button>
    </div>
  </form>
</template>

<style scoped></style>
