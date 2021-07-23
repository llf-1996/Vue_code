<template>
  <el-container>
    <el-aside width="auto">
      <MyAside/>
    </el-aside>
    <el-container>
      <el-header>
        <MyHeader></MyHeader>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <MyFooter></MyFooter>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss">
  body {
    margin: 0;
    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
    }
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
  /*    line-height: 200px; */
    }
  
    .el-main {
      background-color: #E9EEF3;
      color: #333;
    }
  }
</style>

<script>
  import MyAside from '@/components/MyAside.vue'
  import MyHeader from '@/components/MyHeader.vue'
  import MyFooter from '@/components/MyFooter.vue'
  
  export default {
    components: {
      MyAside,
      MyHeader,
      MyFooter
    }
  }
</script>
