<template>
    <div>
        <h3>新闻详情 -- {{ id }}</h3>
    </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$route)
        },
        data(){
            return {
                id: this.$route.params.id,
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>

</style>