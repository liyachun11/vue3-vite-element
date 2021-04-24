<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <el-row>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
  <chlidA msg="chlidA,props方法" ref="chlidA" @childa-btn="childaBtn"></chlidA>
  <el-row>
    <el-button type="success" @click="setEvent">父组件--传子组件,ref方法二</el-button>
  </el-row>
  <p>{{ msg }}</p>
</template>

<script>
import chlidA from "./chlid-a.vue";
import chlidB from "./chlid-b.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { chlidA, chlidB },
  data() {
    return {
      count: 0,
      msg: "",
    };
  },
  methods: {
    //父传子  方法ref  二
    setEvent() {
      this.$refs.chlidA.getEvent("父传子方法ref二");
    },
    //接受子组件 过来的值
    childaBtn(msg) {
      this.msg = msg;
    },
  },
};
</script>
