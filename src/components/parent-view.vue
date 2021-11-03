<template>
  <router-view></router-view>
</template>
<script>
  export default {
    name: 'ParentView',
    computed: {
      cacheList () {
        return this.$store.state.cacheList;
      }
    }
  }
</script>
