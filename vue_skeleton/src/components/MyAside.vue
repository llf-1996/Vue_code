<template>
<el-menu router :default-active="$route.fullPath" unique-opened class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-menu-item index="/home">
    <i class="el-icon-menu"></i>
    <template #title>Home</template>
  </el-menu-item>
  <el-submenu index="/reports">
    <template #title>
      <i class="el-icon-location"></i>
      <span>报告</span>
    </template>
    <el-menu-item index="/reports/add">add</el-menu-item>
    <el-menu-item index="/reports/list">list</el-menu-item>
  </el-submenu>
  
</el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    // fullPath() {
    //   return this.$route.fullPath
    // },
    isCollapse () {
      return this.$store.state.asideCollapsed
    }
  }
}
</script>

<style lang="scss">
.el-menu-vertical-demo {
  min-height: 400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
