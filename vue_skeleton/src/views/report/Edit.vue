<template>
  <div>report edit page</div>
</template>

<script>
export default {
  created() {
    var id = this.$route.params.id;
    var url = '/api/reports/' + id + '/';
    this.axios.get(url)
      .then(res=>{
        console.log(res.data)
      })
  }
}
</script>

<style>
</style>
