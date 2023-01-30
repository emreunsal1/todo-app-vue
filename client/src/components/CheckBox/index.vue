<template>
  <div class="checkbox">
    <input class="checkbox__item" type="checkbox" :id="`checkbox-input-${todoId}`" :checked="isChecked" @change="checkboxChangeHander" />
    <label class="checkbox__visual" :for="`checkbox-input-${todoId}`">
        <img src="../../assets/tick.svg" />
    </label>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CheckBox",
  components: {},
  props: ["todoId"],
  methods: {
    ...mapActions([
      'updateTodoById'
    ]),
    async checkboxChangeHander(e) {
      this.updateTodoById({_id: this.todoId, completeStatus: e.target.checked ? "done": "notDone"})
    }
  },
  computed: {
    ...mapGetters([
      'getTodoById',
    ]),
    isChecked(){
      return this.getTodoById(this.todoId).completeStatus == 'done'
    }
  },
};
</script>
<style lang="scss">
.checkbox {
  height: 25px;
  width: 25px;
  margin-right: 20px;

  &__visual{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: transparent;
    border-radius: 4px;
    border: 3px solid #C6C6C6;
    align-items: center;
    justify-content: center;
    img{
      width: 16px;
      height: 16px;
      display: none;
    }
  }
  &__item{
    display: none;
    position: absolute;
  }

  &__item:checked ~ .checkbox__visual{
    background-color: #C6C6C6;
    border-color: transparent;
    img{
      display: block;
    }
  }
}
</style>
