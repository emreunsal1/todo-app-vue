<template>
  <div class="priority">
    <div class="svg-container">
      <DynamicSvg :name="todoPriority"/>
    </div>
    <div class="value">
      {{ priorityText }}
    </div>
  </div>
</template>
<script>
import DynamicSvg from "../../utils/DynamicSvg.vue"
import { mapGetters } from "vuex";

const texts = {
  "low": "Low",
  "mid": "Medium",
  "high": "High",
}

export default {
  name: "Priority",
  components: {DynamicSvg},
  props: ["todoId"],
  computed: {
    ...mapGetters([
      'getTodoById',
    ]),
    todo(){
      return this.getTodoById(this.todoId);
    },
    todoPriority(){
      return this.todo.priority;
    },
    priorityText(){
      return texts[this.todoPriority]
    }
  }
};
</script>
<style lang="scss">
.priority {
  display: flex;
  font-weight: 400;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .svg-container {
    margin-right: 11px;
    font-size: 20px;
    svg {
      margin: 0;
      padding: 0;
    }
  }
  .value {
    line-height: 27px;
    font-size: 20px;
    color: #000;
  }
}
</style>
