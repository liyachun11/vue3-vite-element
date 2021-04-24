<template>
  <p>我是子组件b,内容是兄弟组件传过来的{{ msg }}</p>
  <el-row>
    <el-button>子组件-b</el-button>
  </el-row>
</template>

<script>
export default {
  name: "chlidB",
  props: {
    msg: String,
  },
  methods: {},
};
</script>
