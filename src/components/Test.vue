<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">熊宝 你好</h1>
    </transition>

    <transition name="bear" appear>
      <h2 v-show="isShow">小熊刺身</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: green;
}

.hello-enter-active {
  animation: atguigu 1s linear;
}
.hello-leave-active {
  animation: atguigu 1s linear reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>