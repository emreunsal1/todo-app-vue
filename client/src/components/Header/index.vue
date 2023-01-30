<template>
  <div class="container" :style="{ color: color, fontSize: size }">
    {{ value }}
  </div>
</template>
<script>
export default {
  name: "Header.vue",
  components: [],
  props: ["value", "color", "size"],
  data() {},
};
</script>
<style lang="scss">
@import "index";
</style>
