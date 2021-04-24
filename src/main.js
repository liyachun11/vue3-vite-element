import { createApp, h } from "vue";
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

//这里想做成全局$bus 兄弟组件之间传值,结果vue3 貌似不是下面的语法,待研究...
var EventBus = new h();
Object.defineProperties(h.prototype, {
  $bus: {
    get: function () {
      return EventBus;
    },
  },
});
