<template>
    <div class="'demo">
      <h2>学校名称：{{ schoolName }}</h2>
      <h2>学校地址：{{ schoolAddress }}</h2>
      <button @click="showName">点我提示学校名</button>
    </div>
<!-- 组件的结构 -->
</template>

<script>
// 组件交互代码
// 引入一个mixin
    import {mixin} from '../mixin'
    export default ({ // 省略 Vue.extend
        name:'School',
        data(){
          return{
            schoolName:'hhhhh',
            schoolAddress:'beijing'
          }
        },
        mixins:[mixin]
    })
</script>

<style>
    .demo{
       background-color: orange;
    }
</style>