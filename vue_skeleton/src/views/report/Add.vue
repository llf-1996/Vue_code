<template>
  <MyFileUploader :url="url" :accept="accept" :tip="tip"></MyFileUploader>
</template>

<script>
import MyFileUploader from '@/components/FileUploader/DragFileUploader.vue'

export default {
  data () {
    return {
      url: 'https://jsonplaceholder.typicode.com/posts/',
      accept: '.xls,.xlsx,.txt,.tsv,.csv',
      tip: '只能上传Excel、csv、tsv文件，且不超过10 Mb'
    }
  },
  components: {
    MyFileUploader
  }
}
</script>

<style>
</style>
