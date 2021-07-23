<template>
  <span class="aside-ctl">
    <span class="el-icon-s-fold" v-show="!isCollapse" @click="changeAside"></span>
    <span class="el-icon-s-unfold" v-show="isCollapse" @click="changeAside"></span>
  </span>
</template>

<script>
export default {
  methods: {
    changeAside () {
      this.$store.commit('changeAsideStatus')
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.asideCollapsed
    }
  }
}
</script>

<style>
span.aside-ctl {
  font-size: 20px;
}
</style>
