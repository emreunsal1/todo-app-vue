<template>
  <div class="todo">
    <div class="todo__left">
      <CheckBox :todo-id="todo._id" />
      <TodoContent :todo-id="todo._id" />
    </div>
    <div class="todo__right">
      <img
        class="todo__right__delete"
        src="../../assets/Delete.svg"
        @click="deleteTodo(todo._id)"
      />
      <Select
        :options="selectOptions"
        @change="updatePriority"
        :default-value="todo.priority"
      />
    </div>
    <div class="todo__border"></div>
  </div>
</template>
<script>
import TodoContent from "../TodoContent/index.vue";
import Priority from "../Priority/index.vue";
import Select from "../Select/index.vue";
import { mapActions } from "vuex";
import CheckBox from "../CheckBox/index.vue";

export default {
  name: "ListItem.vue",
  components: { Select, Priority, TodoContent, CheckBox },
  data() {
    return {
      isSelectOpened: false,
      selectOptions: [
        { text: "Low", value: "low", icon: "low" },
        { text: "Mid", value: "mid", icon: "mid" },
        { text: "High", value: "high", icon: "high" },
      ],
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodoById"]),
    updatePriority(value) {
      this.updateTodoById({ _id: this.todo._id, priority: value });
    },
  },
  props: ["todo"],
};
</script>
<style lang="scss">
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -75px;
  padding: 10px 75px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 50px;
  }

  &__border {
    content: "";
    width: calc(100% - 150px);
    height: 2px;
    background-color: #c6c6c6;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    position: absolute;
  }
  &__left {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
  }
  &__right {
    display: flex;
    &__delete {
      opacity: 0;
      visibility: hidden;
    }
  }
  &:hover {
    .select {
      display: flex;
    }
    background-color: #f4f6ff;
    .todo__right__delete {
      cursor: pointer;
      opacity: 1;
      visibility: visible;
      margin-right: 26px;
    }
    .priority {
      display: none;
      .svg-container {
        display: none;
      }
    }
  }
}
</style>
