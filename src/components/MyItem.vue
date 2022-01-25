<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @change="handleCheck(todoObj.id)"
      />
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      <input
        v-show="todoObj.isEdit"
        type="text"
        :value="todoObj.title"
        @blur="handleBlur(todoObj)"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">
      删除
    </button>
    <button class="btn btn-edit" @click="handleEdit(todoObj)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todoObj"],
  methods: {
    // 勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象值取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      //   if (confirm("确定删除吗？")) {

      //   }
      // this.deleteTodo(id);
      this.$bus.$emit("deleteTodo", id);
    },
    handleEdit(todo) {
      this.$set(todo, "isEdit", true);
      console.log(todo);
    },
    handleBlur(todo) {
      todo.isEdit = false;
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  margin-right: 5px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: rgb(199, 198, 198);
}

li:hover button {
  display: block;
}
</style>