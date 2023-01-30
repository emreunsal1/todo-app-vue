<template>
  <a-modal class="add-todo-popup" :visible="isPopupOpened" title="Add New Todo" @ok="saveClickHandler" @cancel="setIsPopupOpened(false)" okText="Add">
    <a-input v-model:value="content" placeholder="Content"  />
    <div class="add-todo-popup__priority">
      <div class="add-todo-popup__priority__label">
        Priority:
      </div>
      <Select :options="priorityOptions" @change="(value)=> priority = value" :default-value="priorityOptions[0].value" />
    </div>
  </a-modal>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
import Select from "../Select/index.vue"

export default {
  name: "index",
  components: {Select},
  data(){
    return{
      content:null,
      priorityOptions: [
        { text: "Low", value: "low", icon: "low" },
        { text: "Mid", value: "mid", icon: "mid" },
        { text: "High", value: "high" , icon: "high"},
      ],
      priority: "low",
    }
  },
  computed:{
    ...mapGetters(["isPopupOpened"])
  },
  methods:{
    ...mapActions([
        'addTodo'
    ]),
    ...mapMutations(['setIsPopupOpened']),
    saveClickHandler(){
      this.addTodo({content:this.content, priority:this.priority})
    }
  },

}
</script>

<style lang="scss">
.add-todo-popup{
  &__priority{
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
    &__label{
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
