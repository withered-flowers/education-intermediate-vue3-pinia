# Pinia in a Nutshell

### Persyaratan
- Sudah mengerti dan menggunakan `create-vue`
- Mengerti dasar Vue 3 (`Options API`)
- Mengerti dasar penggunaan CSS (pada pembelajaran ini menggunakan `tailwind`)

### What is Pinia ?

Dikutip dari situs Pinia, Pinia ini adalah **Vue Store** yang *menyenangkan* untuk digunakan.

Lebih detilnya, Pinia ini adalah library untuk **Store** di dalam Vue, yang membuat si developer dapat nge-*share* suatu *state* ke dalam suatu Components / Pages.

Masih bingung? Mari kita coba dengan bahasa yang lebih manusiawi lagi.

Pinia adalah suatu library untuk me-manage state pada Vue. 

Anggap saja Pinia sebagai sebuah "wadah" untuk menyimpan data secara global pada Vue, sehingga kita tidak perlu menaruh data global pada `App.vue` atau pada `Component Utama` lagi **DAN** kita tidak perlu lagi untuk mem-passing data terlalu dalam / melakukan `props` terlalu banyak a.k.a `props drilling`.

Sudah mulai terdengar seru? mari kita coba install Pinia sekarang yah !

### How to Install Pinia ?

Untungnya Pinia ini sudah diincludekan di dalam template bawaan dari `create-vue`, sehingga cara instalasinya pun menjadi cukup mudah:

1. Menggunakan perintah `npm init vue@latest`
1. Masukkan `project name` yang diinginkan
1. Pilih opsi untuk menggunakan `Typescript` atau tidak (pada pembelajaran ini **No**)
1. Pilih opsi untuk menggunakan `JSX` atau tidak (pada pembelajaran ini **No**)
1. Pilih opsi untuk menggunakan `Vue Router` atau tidak (pada pembelajaran ini **Yes**)
1. Pilih opsi untuk menggunakan `Pinia` atau tidak (tentunya **YES**)
1. Pilih opsi untuk menggunakan `Vitest` atau tidak (pada pembelajaran ini **No**)
1. Pilih opsi untuk menggunakan `Cypress` atau tidak (pada pembelajaran ini **No**)
1. Pilih opsi untuk menggunakan `ESLint` atau tidak (pada pembelajaran ini **Yes**)
1. Pilih opsi untuk menggunakan `Prettier` atau tidak (pada pembelajaran ini **Yes**)

Sampai di tahap ini artinya initial project untuk Vue yang menggunakan `Pinia` sudah berhasil dibuat, selanjutnya kita akan memasang dan menjalankan `starter pack` dengan cara:

1. Menggunakan perintah `cd nama_project_yang_dibuat`
1. Menginstall package yang dibutuhkan dengan perintah `npm install`
1. Menjalankan project dengan perintah `npm run dev`

Dan kita bisa melihat `starter pack` yang disediakan pada `http://localhost:5173` (port default `Vite`)

Selanjutnya kita akan belajar bagaimana cara menggunakan Pinia

### How to Pinia

Di dalam Pinia ini, akan ada beberapa istilah baru yang harus kita pelajari, yaitu:
- Store
- State
- Actions
- Getters 
- Plugins

#### Store
Sesuai namanya, **Store** ini adalah tempat di mana kita meletakkan keseluruhan kode yang *mengandung* global state management di dalam Pinia ini.

WARNING:
- Hati hati terhadap *id* yang harus digunakan di dalam store ini. **HARUS** bersifat unik !

Mari buka file `src/stores/counter.js` untuk penjelasan lebih lanjut

```js
defineStore({
  id: 'counter',
  ...
})
```

Perhatikan id `counter`, ini harus bersifat untuk dan tidak boleh sama antar store satu dengan store lainnya (bila nantinya ingin memecah store menjadi banyak).

#### State
**State** merupakan *core* dari Pinia ini, adalah data global yang disimpan pada Pinia yang nantinya akan digunakan oleh Component / Pages manapun di dalam Vue.

Ingat kata magicnya: **MANAPUN**

#### Actions
**Actions** ini anggapannya seperti `methods` yang ada pada Vue "normal" yang digunakan dan boleh bersifat *synchronous* ataupun *asynchronous*.

Artinya di actions ini, kita bisa mendefinisikan `methods` yang butuh melakukan proses dengan waktu yang tidak tentu seperti:
- Fetching data ...
- Fetching data 
- FETCHING DATA !

Dan nantinya **Actions** ini juga bisa langsung di-*teleport*-kan ke dalam Component / Pages yang membutuhkan.

Oh ya, di dalam **Actions** ini pun, kita bisa mendefinisikan logic untuk **mengubah State** yang ada di dalam **Store**, mantap kan? 

#### Getters
**Getters**, sesuai namanya, ini merupakan Getter (pengambil) State. Loh kenapa harus ada ini, padahal kan State boleh diambil secara langsung? 

Anggap saja **Getters** ini adalah *computed* yang ada pada Vue, yaitu membaca state dan mengembalikan data hasil komputasinya.

mis, dari data State yang merupakan Array of Object, kita ingin memfilter sesuatu berdasarkan id nya, atau kata kunci lainnya, maka kita bisa menggunakan Getter untuk hal tersebut 😁

Pada pembelajaran ini tidak didemokan yah !

### Let's Get Started with Pinia !

Yuk yuk sudah cukup teorinya, mari sekarang kita akan mulai untuk menggunakan Pinia ke dalam aplikasi kita yah !

Pada pembelajaran ini kita akan membuat sebuah aplikasi berbasis Pinia yang memiliki beberapa fitur utama:
- Sebuah button yang berfungsi untuk menambahkan suatu angka, yang dibuat dalam 2 component yang berbeda (Kiri: button, kanan: tampilan hasil penambahan angka)
- Sebuah form dan hasil panggilan formnya, dibuat dalam 2 component yang berbeda juga. (Kiri: Form, Kanan, tampilan hasil form setelah disubmit)
- Sebuah tabel yang akan menampilkan list jokes dari situs https://v2.jokeapi.dev/, terdiri dari 2 component berupa `TableList` yang didalamnya terdapat component `TableContent`.

Keseluruhan aplikasi ini akhirnya akan memanfaatkan Pinia yah ! 

Bagaimanakah Caranya?

1. Menggunakan perintah `npm init vue@latest` untuk membuat project awal Vue yang menggunakan `Vue Router` dan `Pinia`
1. Karena pada pembelajaran ini menggunakan tailwind, maka di sini juga menggunakan tutorial tambahan dari situs Tailwind secara langsung yang dapat dilihat [di sini](https://tailwindcss.com/docs/guides/vite) untuk menginstall tailwind css
1. Selanjutnya karena pembelajaran ini juga menggunakan fetcher data `axios`, tambahkan package `axios` dengan menggunakan perintah `npm install axios`

#### Langkah Nol - Membuat Template
Ya ! Pada pembelajaran ini, templatenya akan kita buat sendiri yah (tenang, dipandu untuk kode-nya kok supaya tidak berbusa otak dan mulutnya 😁)

1. Membuat beberapa components (pada folder `src/components`) dengan nama seperti di bawah ini:
    - `IncrementalLeft.vue`
    - `IncrementalRight.vue`
    - `FormLeft.vue`
    - `FormRight.vue`
    - `TableList.vue`
    - `TableContent.vue`
1. Memodifikasi File `IncrementalLeft.vue` sebagai berikut:
    ```js
    <script>
    export default {
      name: "IncrementalLeft",
    };
    </script>

    <template>
      <button
        class="bg-gray-100 py-2 px-4 rounded-md hover:bg-gray-300 hover:shadow-md"
      >
        Increment
      </button>
    </template>

    <style scoped></style>
    ```
1. Memodifikasi File `IncrementalRight.vue` sebagai berikut:
    ```js
    <script>
    export default {
      name: "IncrementalRight",
    };
    </script>

    <template>
      <div>
        <p class="font-semibold">0</p>
      </div>
    </template>

    <style scoped></style>
    ```
1. Memodifikasi File `FormLeft.vue` sebagai berikut:
    ```js
    <script>
    export default {
      name: "FormLeft",
    };
    </script>

    <template>
      <form action="#">
        <div>
          <input
            type="text"
            placeholder="Just write me"
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
    ```
1. Memodifikasi File `FormRight.vue` sebagai berikut:
    ```js
    <script>
    export default {
      name: "FormRight",
    };
    </script>

    <template>
      <div>
        <p class="font-semibold">Placeholder for the Form Value</p>
      </div>
    </template>

    <style scoped></style>
    ```
1. Memodifikasi File `TableList.vue` sebagai berikut:
    ```js
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
    ```
1. Memodifikasi File `TableContent.vue` sebagai berikut:
    ```js
    <script>
    export default {
      name: "TableContent",
    };
    </script>

    <template>
      <tbody>
        <tr>
          <td class="border border-gray-300">Placeholder ID</td>
          <td class="border border-gray-300">Placeholder Setup</td>
          <td class="border border-gray-300">Placeholder Punchline</td>
        </tr>
      </tbody>
    </template>

    <style scoped></style>
    ```
1. Memodifikasi File `src/views/AboutView.vue` sebagai berikut:
    ```js
    <script>
    import FormLeft from "../components/FormLeft.vue";
    import FormRight from "../components/FormRight.vue";
    import IncrementalLeft from "../components/IncrementalLeft.vue";
    import IncrementalRight from "../components/IncrementalRight.vue";
    import TableList from "../components/TableList.vue";

    export default {
      components: {
        IncrementalLeft,
        IncrementalRight,
        FormLeft,
        FormRight,
        TableList,
      },
    };
    </script>

    <template>
      <div class="bg-gray-200 text-gray-700 p-4">
        <div class="container flex flex-col mx-auto">
          <!-- Incremental Section -->
          <div class="mx-auto py-4">
            <h3 class="font-bold">Incremental Section</h3>
          </div>
          <div class="flex flex-row mx-auto py-4">
            <incremental-left class="mr-4"></incremental-left>
            <incremental-right class="ml-4 my-auto"></incremental-right>
          </div>
          <!-- Form Section -->
          <div class="mx-auto py-4">
            <h3 class="font-bold">Form Section</h3>
          </div>
          <div class="flex flex-row mx-auto py-4">
            <form-left class="mr-4"></form-left>
            <form-right class="ml-4 my-auto"></form-right>
          </div>
          <!-- Table Section -->
          <div class="mx-auto py-4">
            <h3 class="font-bold">Table Section</h3>
          </div>
          <div class="mx-auto">
            <table-list></table-list>
          </div>
        </div>
      </div>
    </template>

    <style scoped></style>
    ```

Sampai pada tahap ini artinya kita sudah membuat seluruh template yang digunakan untuk pembelajaran ini dan kita siap untuk masuk ke dalam pembuatan kode dengan Pinia !

#### Langkah Pertama - Incremental Section
Pada langkah ini kita akan menyelesaikan logika untuk Incremental pada component
`IncrementalLeft` dan `IncrementalRight`.

Ketika button pada `IncrementalLeft` ditekan, akan menambahkan angka yang ada pada `IncrementalRight` sebesar `10000`.

Sekarang untuk bisa menyelesaikan permasalahan ini, kita akan membutuhkan sebuah `state` pada `store` agar dapat digunakan di component yang akan digunakan.

Langkah pengerjaannya adalah sebagai berikut:
1. Membuat sebuah stores yang baru dengan nama `src/stores/custom.js`
1. Memodifikasi kode pada `src/stores/custom.js` sebagai berikut:
    ```js
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
    });
    ```
1. Selanjutnya kita akan menyambungkan state yang ada pada `src/stores/custom.js` ini pada component `IncrementalRight.vue`, namun dimanakah kita menaruh state `initialNumber` ini? Karena data ini bisa berubah terus menerus, maka tentunya kita tidak bisa menaruh state yang ada di stores ini di dalam `data`, tapi kita harus menaruhnya di dalam ... `computed` !
1. Cara untuk meletakkannya adalah dengan membaca dokumentasi pinia state dapat dilihat [di sini](https://pinia.vuejs.org/core-concepts/state.html#usage-with-the-options-api)). 
1. Memodifikasi file `IncrementalRight.vue` sebagai berikut:
    ```js
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
    ```
1. Dan `voila !`, kita sudah berhasil untuk membaca data state dan menaruhnya pada component `IncrementalRight.vue` ini !
1. Selanjutnya kita akan mencoba untuk membuat fungsi untuk menambahkan state ketika tombol yang ada pada `IncrementalLeft.vue` ini ditekan. Untuk itu, sekarang kita harus memodifikasi `src/stores/custom.js` untuk membuat fungsi tersebut. Fungsi ini akan kita buat pada bagian `actions` yang ada pada stores, dan modifikasi kodenya adalah sebagai berikut:
    ```js
    import { defineStore } from "pinia";

    export const customStore = defineStore({
      id: "custom",
      state: () => ({
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
    ```
1. Selanjutnya kita tinggal menggunakan `actions` yang sudah kita buat ini pada `IncrementalLeft.vue`. Memodifikasi `IncrementalLeft.vue` sebagai berikut:
    ```js
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
    ```

Sampai pada tahap ini artinya kita sudah berhasil menggunakan `state` dan `actions` dari Pinia pada 2 component yang terpisah, `IncrementalLeft.vue` dan `IncrementalRight.vue`. 

Cukup menakjubkan bukan? **Langsung nyambung loh, padahal adanya di store**

#### Langkah Kedua - Form Section
Pada bagian ini kita akan mencoba untuk menyelesaikan bagian Form, dimana pada saat form yang ada pada `FormLeft` ini di-`submit`, maka akan memengaruhi konten yang ditampilkan pada `FormRight`.

Langkah-langkah pengerjaannya adalah sebagai berikut:
1. Memodifikasi file `src/stores/custom.js` untuk menambahkan sebuah `state` baru dengan nama `formData` dan sebuah `actions` untuk mengubah `formData` bernama `formHandler`, kode modifikasinya adalah sebagai berikut:
    ```js
    import { defineStore } from "pinia";

    export const customStore = defineStore({
      id: "custom",
      state: () => ({
        initialNumber: 10,
        // declare state untuk handle form
        formData: {
          // karena bisa banyak valuenya, kita bentuk dalam object
          value1: "Placeholder",
        },
      }),
      actions: {
        incrementInitialNumber() {
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
      },
    });
    ```
1. Selanjutnya kita akan menggunakan state `formData.value1` pada component `FormRight.vue`. Memodifikasi `FormRight.vue` sehingga menjadi seperti ini:
    ```js
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
    ```
1. Selanjutnya kita akan menggunakan actions `formHandler` pada component `FormLeft.vue`. Memodifikasi `FormLeft.vue` sehingga menjadi seperti ini:
    ```js
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
    ```

Sampai pada tahap ini artinya kita sudah berhasil untuk membuat sebuah form submission yang mana akan langsung mengubah state dan perubahan dari state tersebut akan mengubah tulisan yang ada pada komponen lainnya secara langsung.

Asik kan Pinia?

Selanjutnya kita akan mulai bermain dengan tarikan data !

#### Langkah Ketiga - Table Section

### Hint Pinia

### TL;DR

### References
- https://pinia.vuejs.org/
- https://pinia.vuejs.org/core-concepts/state.html#usage-with-the-options-api
- https://tailwindcss.com/docs/guides/vite