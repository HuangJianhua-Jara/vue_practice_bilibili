<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <div>
      <h1 v-show="isShow" class="animate__heartBeat">小熊刺身 你好</h1>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: rgb(143, 33, 153);
}
</style>