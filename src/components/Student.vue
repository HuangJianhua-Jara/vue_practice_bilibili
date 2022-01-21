<template>
    <div class="'demo">
      <h2>宝宝的名字：{{ name }}</h2>
      <h2>宝宝的年龄：{{  age }}</h2>
      <button @click="showName">点我提示学生名</button>
    </div>
<!-- 组件的结构 -->
</template>

<script>
// 组件交互代码
    export default ({ // 省略 Vue.extend
        name:'Student',
        data(){
          return{
            name:'冀凯熊',
            age:23
          }
        },
        
    })
</script>

<style>
    .demo{
       background-color: orange;
    }
</style>