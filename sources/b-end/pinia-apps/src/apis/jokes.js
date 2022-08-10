// import axios
import axios from "axios";

// membuat instance axios berdasarkan api yang digunakan
// https://v2.jokeapi.dev
const instance = axios.create({
  baseURL: "https://v2.jokeapi.dev/",
  // apabila membutuhkan header authorization
  //  (bearer / token / basic)
  //  bisa diletakkan di sini
});

// jangan lupa diexport karena akan digunakan di tempat lainny
export default instance;
