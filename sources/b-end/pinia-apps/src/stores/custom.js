// import defineStore dari pinia
import { defineStore } from "pinia";
// import instance axios di sini
import jokesInstance from "../apis/jokes";

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
    // declare state untuk handle form
    formData: {
      // karena bisa banyak valuenya, kita bentuk dalam object
      value1: "Placeholder",
    },
    // declare state untuk berisi kumpulan dari jokes
    jokes: [],
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

    // method Actions untuk menghandle Form
    // karena sekarang di sini kita membutuhkan input
    // maka kita bisa menggunakan parameter di dalam fungsi
    // yang dibuat

    // sebut saja nama parameternya adalah "payload"
    formHandler(payload) {
      // di sini kita akan mengubah keseluruhan dari formData
      this.formData = payload;
    },

    // method Actions untuk mengambil data dari API Jokes
    // karena di sini akan mengambil data, yang mana durasi
    // pengerjaannya tidak menentu, maka kita akan menggunakan
    // logicnya secara asynchronous

    // tambahkan kata kata async di depan actions yang dibuat
    async fetchJokes() {
      try {
        // kita ambil data dari jokes api
        const response = await jokesInstance.get(
          "/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10"
        );

        console.log(response.data);

        // apabila berhasil mendapatkan response (dunia sempurna)
        // maka kita akan set state jokesnya

        // data jokes ada pada Object punya props jokes
        this.jokes = response.data.jokes;
      } catch (err) {
        // error sederhana dengan console log
        // bila dibutuhkan bisa menggunakan sebuah state error
        //    atau langsung memberikan toast / swal
        console.log(err.response);
      }
    },
  },
});
