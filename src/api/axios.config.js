import Storage from "../assets/storage"
import axios from "axios";

//区别:  process.env  这个是vue2 中获取地址的  vue3/vite 用这个import.meta.env
//在vite中有两个环境
//env.development
//env.production
//注意： 命名规范 ``VITE_为前缀的变量才会暴露给经过vite`处理的代码
//vite  时是development开发模式 用proxy解决跨域。
//以下接口  已是调通状态

axios.MSG_BASE_CENTER = `${import.meta.env.VITE_API_DOMAIN}/message`; //消息中心
console.log("env", process.env, import.meta);
Storage.set('token', "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvSWQiOiIxMzcyMDc0MzI0OTkwNjI3ODQyIiwic3lzVHlwZSI6IjAiLCJ1c2VyX25hbWUiOiIxMzI0NTY3ODkzMiIsInNjb3BlIjpbIndlYmFwcCJdLCJuYW1lIjoi55m95a2Q55S7IiwiaWQiOiIxMzcyMDc0NDQ0MzM5NTQ4MTYyIiwiZXhwIjoxNjM1ODUxMzE4LCJqdGkiOiIyZGRiZWY3Mi00NGY4LTRjMTQtOGYzNi0yMGRhMjg1MmZmMWIiLCJhdXRob3JpdGllcyI6W10sImNsaWVudF9pZCI6IndlYmFwcCIsInVzZXJuYW1lIjoiMTMyNDU2Nzg5MzIifQ.QrHltUm1ltJV3YvY5uFlUaHjJJi2kPg05FjiSWypWkY");

//  axios.defaults.baseURL = process.env.API_ROOT
//请求超时时间
//axios.defaults.timeout = 10000;

//设置全局的请求次数，请求的间隙
axios.defaults.retry = 3;
axios.defaults.retryDelay = 1000;
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.url.indexOf("/auth/checkOauth") == "-1") {
      config.headers["Accept-Language"] = localStorage.getItem("locale")
        ? localStorage.getItem("locale")
        : "zh-CN";
      config.headers["Content-Type"] = "application/json; charset=UTF-8";
      if (Storage.get("token")) {
        config.headers.Authorization = Storage.get("token");
      }
      if (sessionStorage.apiToken) {
        config.headers.apiToken = sessionStorage.apiToken;
      }
      if (Storage.get("userId")) {
        config.headers.userId = Storage.get("userId");
      }
      if (Storage.get("orgId")) {
        config.headers.orgId = Storage.get("orgId");
      }
      if (Storage.get("userInfo", true)) {
        config.headers.personId = Storage.get("userInfo", true).personId;
      }
    }
    return config;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  function (response) {
    if (response.config.responseType === "arraybuffer") {
      return Promise.resolve(response);
    }
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  function (err) {
    if (err && err.response) {
      //err.message = err.response.status+' '+err.response.data.message
      switch (err.response.status) {
        case 400:
          err.message = err.response.data.error_description || "请求错误(400)";
          break;
        case 401:
          err.message = err.response.data.error_description;
          Storage.removeAll();
          // router.replace({
          //   path: '/'
          // });
          let env = process.env.Environment;
          break;
        case 403:
          err.message = "拒绝访问(403)";
          break;
        case 404:
          err.message = "请求出错(404)";
          break;
        case 408:
          err.message = "请求超时(408)";
          break;
        case 500:
          err.message = err.response.data.msg ? err.response.data.msg : err.response.data.message;
          break;
        case 501:
          err.message = "服务未实现(501)";
          break;
        case 502:
          err.message = "网络错误(502)";
          break;
        case 503:
          err.message = "服务不可用(503)";
          break;
        case 504:
          err.message = "网络超时(504)";
          break;
        case 505:
          err.message = "HTTP版本不受支持(505)";
          break;
        default:
          err.message = `连接出错(${err.response.status})!`;
      }
    } else {
      err.message = "连接服务器失败!";
    }
    console.dir(111, err);
    // if (err.config.responseType === "arraybuffer") {
    //   var blob = new Blob([err.response.data], { type: "text/plain" });
    //   var fr = new FileReader();
    //   fr.readAsText(blob);
    //   fr.onload = () => {
    //     if (fr.result) {
    //       let err = JSON.parse(fr.result);
    //     }
    //   };
    // } else {
    // }
    return Promise.reject(err);
  }
);








// import axios from "axios";
// import qs from "qs";
// import { ElMessageBox } from "element-plus";

// // axios.defaults.baseURL = ''  //正式
// // axios.defaults.baseURL = 'http://test' //测试

// //post请求头
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
// //设置超时
// axios.defaults.timeout = 10000;

// axios.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     if (response.status == 200) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
//   (error) => {
//     ElMessageBox(JSON.stringify(error), "请求异常", {
//       confirmButtonText: "确定",
//       callback: (action) => {},
//     });
//   }
// );
// export default {
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: "post",
//         url,
//         data: qs.stringify(data),
//       })
//         .then((res) => {
//           resolve(res.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   },

//   get(url, data) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: "get",
//         url,
//         params: data,
//       })
//         .then((res) => {
//           resolve(res.data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   },
// };
