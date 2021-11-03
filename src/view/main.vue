<template>
  <el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item v-for="(item, index) in menList" :key="index" :index="index" @click="routeTo(item)">{{ item.name }}</el-menu-item>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
  </el-menu>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-container>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
  <div class="content-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
// 这块用的"element-ui": "^2.15.6",vue3,vite  但elementUI的这个版本暂时不兼容vue3

import HelloWorld from "../components/HelloWorld.vue";
import * as msgCenter from "../api/msgCenter.api";
export default {
  data() {
    return {
      tableData: [],
      menList: [
        { name: "渠道管理", url: "channelManagement" },
        { name: "模板管理", url: "channelManagement" },
        { name: "应用管理", url: "channelManagement" },
      ],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      let params = {
        current: 1,
        size: 10,
        orgId: "1372066958400294913",
        orgName: "",
        channelTypeCodes: [],
      };
      console.log(222222, msgCenter);
      const item = {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      };
      msgCenter.getchannelList(params).then((res) => {
        if (res.data.code === 200) {
          this.tableData = Array(20).fill(item);
        }
      });
    },
    routeTo(item) {
      this.$router.push(item.url);
    },
  },
};
</script>
<style>
.el-header {
  background-color: #0c0c0c;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #fff;
}
</style>
