import { createApp } from "vue";
import Antd from 'ant-design-vue';
import "./style.scss";
import App from "./App.vue";
import store from "./store.js";

import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.use(store)
app.use(Antd);

app.mount("#app");
