import { createRouter, createWebHashHistory } from "vue-router";
// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import login from "../view/login.vue";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  { path: "/login", component: login },
];
// Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
