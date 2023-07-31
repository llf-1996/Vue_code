<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/home/news/' + newsId">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间: {{ dateStr | dateFormat }}</span>
                            <span>点击: 0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;" class="">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间: {{ dateStr | dateFormat('YYYY-MM-DD') }}</span>
                            <span>点击: 0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;" class="">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间: {{ dateStr }}</span>
                            <span>点击: 0次</span>
                        </p>
                    </div>
                </a>
            </li>

        </ul>

    </div>
</template>

<script>
import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                newslist: {},
                dateStr: "2023-12-12T12:12:12.000Z",
                newsId: 1,
            }
        },
        created(){
            this.getNewsList();
        },
        methods: {
            getNewsList(){
                this.$http.get('api/getnewslist').then(result => {
                    if (result.body.status === 0) {
                        console.log(111)
                        this.newslist = result.body.mesage;
                    } else {
                        Toast("获取新闻列表失败")
                    }
                }).catch(err =>{
                    console.log(err)
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 12px;
            color: #226afa;
            display: flex;
            justify-content: space-between;
        }
    }
}

</style>
