<template>
  <div class="app">
    <Header :value="'SEO Checklist'" :color="'#4F61FF'" :size="'40px'" />
    <div class="__selects">
      <Select :options="statusFilterOptions" @change="(value) => setFilters({completeStatus: value})" />
      <Select :options="priorityFilterOptions" @change="(value) => setFilters({priority: value})" default-value="all"  />
      <Select :options="sortByOptions" @change="setSortBy" :default-value="sortBy" />
    </div>
    <List />
    <CreateTodo/>
  </div>
</template>

<script >
import Header from "./components/Header/index.vue";
import Select from "./components/Select/index.vue";
import List from "./components/TodoList/index.vue";
import {mapActions, mapMutations, mapGetters} from "vuex"
import {SORT_RULES} from "./constants.js"
import CreateTodo from "./components/CreateTodo/index.vue";

export default {
  name: "App.vue",
  components: {CreateTodo, Header, Select, List },
  methods:{
    ...mapActions([
      'loadTodos',
    ]),
    ...mapMutations([
      'setFilters',
      'setSortBy'
    ]),
  },
  data() {
    return {
      priorityFilterOptions: [
        { text: "Low", value: "low", icon: "low" },
        { text: "Mid", value: "mid", icon: "mid" },
        { text: "High", value: "high" , icon: "high"},
        { text: "All", value: "all" , icon: "all"},
      ],
      statusFilterOptions: [
        { text: "All", value: "all"},
        { text: "Done", value: "done"},
        { text: "Not Done", value: "notDone"},
      ],
      sortByOptions: [
        { text: "High to Low", value: SORT_RULES.HIGH_TO_LOW },
        { text: "Low to High", value: SORT_RULES.LOW_TO_HIGH },
        { text: "New to Old", value: SORT_RULES.NEW_TO_OLD },
        { text: "Old to New", value: SORT_RULES.OLD_TO_NEW },
      ],
    };
  },
  mounted() {
    this.loadTodos()
  },
  computed:{
    ...mapGetters(['sortBy'])
  }
};
</script>

<style lang="scss">
.app {
  width: 900px;
  max-width: 90%;
  margin: 90px auto 0 auto;
  box-shadow: 3px 5px 25px 14px #1500960d;
  border-radius: 10px;
  padding: 80px 75px;
  .__selects {
    display: flex;
    margin-bottom: 36px;
    .select {
      &:not(:first-child) {
        margin-left: 40px;
      }
    }
  }
}
</style>
