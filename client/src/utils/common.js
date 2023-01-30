import {PRIORITY_INDEXES, SORT_RULES} from "../constants.js";

export const formatDate = (date) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric'}
    return new Intl.DateTimeFormat('tr-TR',options).format(new Date(date))
}

export const filterTodos = (todos,filters) => {
    Object.keys(filters).forEach((key) => {
        if(filters[key] == "all"){
            filters[key] = undefined;
        }
    })
    const {completeStatus, priority} = filters;
    if(!completeStatus && !priority){
        return todos;
    }
    return todos.filter((todo) => {
        // only complete status selected
        if(completeStatus && !priority){
            return todo.completeStatus == completeStatus
        }
        // only priority selected
        if(priority && !completeStatus){
            return todo.priority == priority
        }
        // two of them selected
        return todo.priority == priority && todo.completeStatus == completeStatus
    })
}

const getTimeStamp = (mongooseDate) =>{
    return new Date(mongooseDate).getTime()
}

export const sortTodos = (todos, sortRule) => {
    const sortedTodos = todos;
    return sortedTodos.sort((a, b) => {
        if(sortRule === SORT_RULES.NEW_TO_OLD){
            return getTimeStamp(b.createdAt) - getTimeStamp(a.createdAt);
        }
        if(sortRule === SORT_RULES.OLD_TO_NEW){
            return getTimeStamp(a.createdAt) - getTimeStamp(b.createdAt);
        }
        if(sortRule === SORT_RULES.HIGH_TO_LOW){
            return PRIORITY_INDEXES[b.priority] - PRIORITY_INDEXES[a.priority]
        }
        if(sortRule === SORT_RULES.LOW_TO_HIGH){
            return PRIORITY_INDEXES[a.priority] - PRIORITY_INDEXES[b.priority]
        }
    })
}
