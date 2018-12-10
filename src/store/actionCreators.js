import {GET_INIT_LIST,CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_DATA_ACTION} from './actionTypes'
/* import axios from 'axios' */


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

export const getInitList=()=>({
    type:GET_INIT_LIST
})
/* //redux-thunk中间件请求，
export const getTodoList=()=>{
    //返回的函数自动会接收dispatch方法
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5ae2b3c4ab5bad29ce810a51/example/reactdemo')
        .then((res)=>{
            const data=res.data
            const action = initListDataaction(data)
            dispatch(action)
        })
        .catch()
    }
} */