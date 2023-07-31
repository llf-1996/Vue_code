// 入口文件
import moment from 'moment'
import Vue from 'vue'
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

import app from './App.vue'
import router from './router.js'

Vue.http.options.root = 'http://127.0.0.1:8000'
Vue.filter('dateFormat', function(dataStr, pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
