import {createStore} from "vuex";
import todoApi from "./api/todo.js";
import {filterTodos, sortTodos} from "./utils/common.js";
import {SORT_RULES} from "./constants.js";


const store = createStore({
    state () {
        return {
            todos: [],
            filters: { competeStatus: "all", priority: "all" },
            sortBy: SORT_RULES.NEW_TO_OLD,
            isPopupOpened: false,
        }
    },
    getters:{
        todos(state){
            const sortedTodos = sortTodos(state.todos,state.sortBy);
            return filterTodos(sortedTodos, state.filters)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo._id === id)
        },
        sortBy(state) {
            return state.sortBy
        },
        isPopupOpened(state){
            return state.isPopupOpened
        }
    },
    mutations: {
        setTodos(state, value){
            state.todos = value
        },
        setFilters(state, value){
            state.filters = { ...state.filters, ...value }
        },
        setSortBy(state, value){
            state.sortBy = value
        },
        setIsPopupOpened(state,value){
            console.log("ase", value)
            state.isPopupOpened = value
        }
    },
    actions: {
        loadTodos: async ({commit}) => {
            const todos = await todoApi.get();
            commit("setTodos", todos);
        },
        updateTodoById: async ({dispatch}, payload) => {
            const {_id, ...otherValues} = payload;
            await todoApi.update(_id, otherValues);
            return dispatch("loadTodos");
        },
        addTodo: async ({dispatch,commit}, payload) => {
            await todoApi.create(payload);
            commit('setIsPopupOpened',false);
            return dispatch("loadTodos");
        },
        deleteTodo: async ({dispatch}, payload) => {
            await todoApi.deleteTodo(payload);
            return dispatch("loadTodos");
        }
    }
})

export default store
