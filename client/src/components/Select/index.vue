<template>
  <div class="select">
    <a-select
        class="select__antselect"
        @change="onChangeHander"
        :defaultValue="defaultValue || options[0].value"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
    >
      <a-select-option v-for="(option, i) in options" :key="i" :value="option.value">
        <div class="select__antselect__content">
          <dynamic-svg  v-if="option.icon" :name="option.icon" />
          <span>{{option.text}}</span>
        </div>
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
import DynamicSvg from "../../utils/DynamicSvg.vue";

export default {
  name: "Select.vue",
  components: {DynamicSvg},
  props:["options", "defaultValue"],
  methods: {
    onChangeHander(value){
      this.$emit("change", value)
    }
  }
};
</script>
<style lang="scss">
.select {
  width: 147px;
  height: 47px;
  display: flex;
  align-items: center;
  position: relative;

  &__antselect{
    width: 100%;
    height: 100%;

    .ant-select-selector{
      height: 100%!important;
      background-color: #F6F6F8!important;
      box-shadow: unset!important;
      border: none!important;
      .ant-select-selection-item{
        display: flex!important;
        align-items: center!important;
      }
    }
    &__content{
      display: flex;
      align-items: center;
      svg{
        width: 14px;
        height: 14px;
      }
      span{
        margin-left: 5px;
      }
    }
  }
  select {
    border: unset;
    outline: none;
    width: 100%;
    max-width: 400px;
    padding: 0 40px 0 10px;
    appearance: none;
    font-size: 16px;
    background-image: url("../../assets/chevron-down.svg");
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 24px 15px;
    option {
      position: absolute !important;
      top: 20px;
      left: 20px;
    }
  }
}
</style>
