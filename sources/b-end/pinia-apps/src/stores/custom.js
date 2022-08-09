// import defineStore dari pinia
import { defineStore } from "pinia";

// export store yang dibuat agar dapat digunakan
// defineStore adalah sebuah fungsi yang menerima options
export const customStore = defineStore({
  // salah satu options-nya wajib ada 'id'
  id: "custom",
  // di sini kita akan declare state yang ada di dalam store ini
  // state adalah sebuah fungsi (disarankan dengan arrow function)
  // fungsi ini akan mereturn sebuah object (mirip data pada component vue)
  state: () => ({
    // declare state yang dibutuhkan
    initialNumber: 10,
  }),
  // di sini kita akan declare sebuah fungsi (methods) yang akan menambahkan initialNumber sebesar 10000
  // dengan menggunakan "actions".
  // anggap ini seperti "methods" pada component Vue
  actions: {
    // di sini kita akan membuat method-nya

    // karena ini akan mengubah state secara langsung
    // maka kita tidak membutuhkan `async`
    incrementInitialNumber() {
      // untuk akses state tinggal menggunakan "this"
      this.initialNumber += 10000;
    },
  },
});
