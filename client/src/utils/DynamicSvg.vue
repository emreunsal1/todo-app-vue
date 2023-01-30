<template>
  <Mid v-if="name === 'mid'"/>
  <Low v-if="name === 'low'"/>
  <High v-if="name === 'high'"/>
  <All v-if="name === 'all'"/>
</template>

<script>
import All from "../assets/all-filter.vue";
import Low from "../assets/Low.vue";
import Mid from "../assets/Mid.vue";
import High from "../assets/High.vue";
export default {
  name: "DynamicSvg",
  components: {High, Mid, Low,All},
  props:["name"],
}
</script>

<style>

</style>
