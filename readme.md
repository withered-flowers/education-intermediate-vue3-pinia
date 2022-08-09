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

### Let's Get Started with Pinia !

### Hint Pinia

### TL;DR

### References
- https://pinia.vuejs.org/introduction.html