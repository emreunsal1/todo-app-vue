<template>
  <div class="todo-content">
    <div v-if="!isEditing" class="todo-content__text" @click="editClickHandler">{{ todo.content }}</div>
    <input
       v-if="isEditing"
       v-model="text"
       class="todo-content__input"
       ref="inputRef"
       autofocus
       @blur="blurHandler"
       @keydown.enter="enterHandler"
       @keydown.esc="cancelHandler"
    />
    <div class="todo-content__date">{{ formattedDate }}</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { formatDate } from "../../utils/common.js"

export default {
  name: "TodoContent",
  props: ["todoId"],
  data(){
    return {
      isEditing: false,
      text: ""
    }
  },
  methods: {
    ...mapActions(['updateTodoById']),
    editClickHandler(){
      this.isEditing = true;
      this.text = this.todo.content
    },
    async blurHandler(){
      if(this.text == this.todo.content){
        this.isEditing = false;
        return;
      }
      if(!this.text.length){
        return this.$message.error("Content should not be empty");
      }
      await this.updateTodoById({_id: this.todoId, content: this.text})
      this.isEditing = false;
      this.$message.success("Successfully updated!");
    },
    enterHandler(){
      this.$refs.inputRef.blur();
    },
    cancelHandler(){
      this.text = this.todo.content;
      this.isEditing =false
    }
  },
  computed: {
    ...mapGetters([
      'getTodoById',
    ]),
    formattedDate(){
      return formatDate(this.todo.updatedAt)
    },
    todo(){
      return this.getTodoById(this.todoId);
    }
  }
};
</script>

<style lang="scss">
.todo-content {
  width: 100%;
  font-weight: 400;
  text-align: start;
  &__text {
    line-height: 38px;
    height: 38px;
    font-size: 24px;
    color: #000;
    margin-bottom: 2px;
  }
  &__input{
    height: 38px;
    line-height: 38px;
    font-size: 24px;
    color: #000;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
  }
  &__date {
    font-size: 14px;
    line-height: 19.17px;
    color: #c6c6c6;
  }
}
</style>
