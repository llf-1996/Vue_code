<template>
  <div>report list page</div>
  <MyReportTable :datas="datas" :total="total" @getDatas="getDatas"></MyReportTable>
</template>

<script>
import MyReportTable from '@/components/MyReportTable.vue'
export default {
  data() {
    return {
      datas: [],
      total: 0
    }
  },
  components: {
    MyReportTable
  },
  methods: {
    getDatas(currentPage) {
      let url = '/api/reports/'
      this.axios.get(url, {
        params: {
          page: currentPage
        }
      })
        .then((response) => {
          console.log(response)
          console.log(response.data)
          this.datas = response.data.results;
          this.total = response.data.count
        })
        .catch((response) => {
          console.log('this.axios')
          console.log(response)
        })
    }
  },
  created() {
    let url = '/api/reports/'
    this.axios.get(url)
      .then((response) => {
        console.log(response)
        console.log(response.data)
        this.datas = response.data.results;
        this.total = response.data.count
      })
      .catch((response) => {
        console.log('this.axios')
        console.log(response)
      })
    
    // this.$http.get(url)
    //   .then((response) => {
    //     console.log('this.$http', response.data)
    //   })
    //   .catch((response) => {
    //     console.log('this.$http')
    //     console.log(response)
    //   })
  }
}
</script>

<style>
</style>
