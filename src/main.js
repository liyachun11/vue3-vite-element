import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./route/index";
import axios from "./api/axios";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
//全局配置
app.config.globalProperties.$http = axios;
