import {ADD_TODO} from '.actionTypes'

let nexTodoId = 0;

export const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: ++nexTodoId,
        content
    }
})