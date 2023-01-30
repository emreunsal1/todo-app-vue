<template>
  <div class="create-todo">
    <div class="button-container">
      <img @click="addClickHandler" src="../../assets/addButton.svg" />
    </div>
    <AddTodoPopup />
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import AddTodoPopup from "../AddTodoPopup/index.vue";
export default {
  name: "CreateTodo",
  components: {AddTodoPopup},
  methods: {
    ...mapMutations([
      'setIsPopupOpened'
    ]),
    addClickHandler() {
      console.log("selam");
      this.setIsPopupOpened(true);
    },
  },
};
</script>
<style lang="scss">
.create-todo{
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 68px;
  .button-container{
    cursor: pointer;
  width: 40px;
    height: 40px;
    img{
      width: 100%;
      height: 100%;
    }
  }

}
</style>
