<template>
  <div class="list">
    <Todo v-for="todo in todos" :key="todo._id" :todo="todo" />
  </div>
</template>

<script>
import Todo from "../Todo/index.vue";
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  components: { Todo },
  computed: {
    ...mapGetters([
      'todos',
    ])
  },
};
</script>
