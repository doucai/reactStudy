import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_DATA_ACTION} from './actionTypes'

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItem=()=>({
    type:ADD_TODO_ITEM
})

export const getDeleteTodoItem=(index)=>({
    type:DELETE_TODO_ITEM,
    index
})

export const initListDataaction=(data)=>({
    type:INIT_LIST_DATA_ACTION,
    data
})