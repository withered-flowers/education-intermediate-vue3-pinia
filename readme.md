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
1. Karena pada pembelajaran ini menggunakan tailwind, maka di sini juga menggunakan tutorial tambahan dari situs Tailwind secara langsung yang dapat dilihat [di sini](https://tailwindcss.com/docs/guides/vite)

### Hint Pinia

### TL;DR

### References
- https://pinia.vuejs.org/
- https://tailwindcss.com/docs/guides/vite