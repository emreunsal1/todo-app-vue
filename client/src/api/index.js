import axios from "axios";

const instance = axios.create({
  baseURL: "https://todo-app-vue-production.up.railway.app",
});

export default instance;
