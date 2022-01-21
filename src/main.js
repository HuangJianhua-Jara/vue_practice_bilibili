/** 
 * 该文件是入口文件
 */

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 作用 将App组件放入容器
  render: h => h(App),
}).$mount('#app')

