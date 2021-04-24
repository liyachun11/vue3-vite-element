<template>
  <p>父组件传---子组件a{{ msg }}</p>
  <el-row>
    <el-button type="primary" @click="chlidBtn()">子组件-a</el-button>
  </el-row>
  <p>{{ getEventData }}</p>
</template>

<script>
import chlidB from "../components/chlid-b.vue";
export default {
  name: "chlidA",
  props: {
    msg: String,
  },
  components: {
    chlidB,
  },
  data() {
    return {
      getEventData: "",
    };
  },
  methods: {
    chlidBtn() {
      this.$emit("childa-btn", "子组件A---父组件的值");
      console.log(this.$bus);
    },
    getEvent(msg) {
      this.getEventData = msg;
    },
  },
};
</script>
