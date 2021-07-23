<template>
  <el-upload
    class="upload-demo"
    drag
    :action="url"
    :accept="accept"
    :before-upload="beforeAvatarUpload">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <template #tip>
      <div class="el-upload__tip">{{ tip }}</div>
    </template>
  </el-upload>
</template>

<script>
  export default {
    props: ['url', 'accept', 'tip'],
    methods: {
      beforeAvatarUpload(file) {
        // text/csv  text/tab-separated-values  text/plain
        // xlsx: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        // xls: application/vnd.ms-excel
        console.log('???', file.type);
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isJPG) {
          this.$message.error('上传文件只能是 JPG 格式!');
          return false
        }
        if (!isLt2M) {
          this.$message.error('上传文件大小不能超过 2MB!');
          return false
        }
        return true
      }
    }
  }
</script>

<style>

</style>
