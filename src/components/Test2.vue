<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">小熊刺身 熊宝 你好</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test2",
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
  transition: 0.3s linear;
}

.hello-enter {
  transform: translateX(-100%);
}
.hello-enter-to {
  transform: translateX(0);
}

.hello-leave {
  transform: translateX(0);
}
.hello-leave-to {
  transform: translateX(-100%);
}
</style>