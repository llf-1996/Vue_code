
<template>
  <el-table
    :data="datas"
    height="600"
    border
    style="width: 100%">
    <el-table-column
      label="id">
      <template #default="scope">
        <router-link :to="'/reports/' + scope.row.id + '/edit'" custom 
                      v-slot="{ href, navigate }">
          <el-link type="primary" :href="href" @click="navigate">{{ scope.row.id }}</el-link>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="创建时间">
    </el-table-column>
  </el-table>
  <el-pagination
    :hide-on-single-page="false"
    layout="prev, pager, next"
    :total="total"
    @current-change="pageChange">
  </el-pagination>
</template>

<script>
export default {
  props: {
    datas: Array,
    total: Number
  },
  emits: ['getDatas'],
  methods: {
    pageChange (currentPage) {
      console.log(currentPage);
      this.$emit('getDatas', currentPage)
    },
    goToDetail(id) {
      var url = '/reports/' + id + '/edit';
      this.$router.push(url)
    }
  }
}
</script>

<style>
</style>
