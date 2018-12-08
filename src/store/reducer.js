import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_DATA_ACTION} from './actionTypes'

const defaultState = {
    inputValue:'',
    list:[]
}
//reducer 可以接受state，但是绝对不能改变state
//纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
//非纯函数，给定固定的输入，没有固定的输出，如：newState.inputValue=new Date()
export default (state=defaultState , action)=>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState;
    }else if(action.type === ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState;
    }else if(action.type === DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState;
    }else if(action.type === INIT_LIST_DATA_ACTION){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list=action.data
        return newState;
    }
    return state;        
}